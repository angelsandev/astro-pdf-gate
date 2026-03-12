import axios from 'axios';


// src/scripts/modal.ts

export function setupModal(): void {
  // Indicar a TS qué tipo de elemento es cada uno para tener autocompletado
  const modal = document.querySelector<HTMLDialogElement>('#download-modal');
  const emailForm = document.querySelector<HTMLFormElement>('#email-form');
  const pdfNameSpan = document.querySelector<HTMLSpanElement>('#pdf-name');
  const closeBtn = document.querySelector<HTMLButtonElement>('#close-modal');

  let currentPdfUrl: string | null = "";
let currentPdfTitle: string = "";

  if (!modal) {
    console.error("No se encontró el modal con ID #download-modal");
    return;
  }

  document.addEventListener('click', (e: MouseEvent) => {
    // 'e.target' puede ser cualquier cosa, lo tratamos como HTMLElement
    const target = e.target as HTMLElement;
    const btn = target.closest('.btn-primary') as HTMLButtonElement | null;

    if (btn && btn.closest('.pdf-card')) {
      const card = btn.closest('.pdf-card');

      if (!card) return;
      
      const titleElement = card.querySelector('.pdf-title') as HTMLElement;

      currentPdfTitle = titleElement?.innerText || "Documento";
      currentPdfUrl = btn.getAttribute('data-pdf-url');

      if (pdfNameSpan) pdfNameSpan.innerText = currentPdfTitle;


      modal.showModal();
    }
  });

  closeBtn?.addEventListener('click', () => {
    modal.close();
  });

  // Cerrar al hacer clic fuera del Modal Card blanco
  modal.addEventListener('click', (e: MouseEvent) => {
    if (e.target === modal) modal.close();
  });

  emailForm?.addEventListener('submit', async (e: SubmitEvent) => {
    e.preventDefault();

    // Buscar el input específicamente
    const input = emailForm.querySelector<HTMLInputElement>('.email-input');
    const errorSpan = emailForm.querySelector<HTMLSpanElement>('#email-error');

    const email: string = input?.value || "";
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;// Regla: "Texto + @ + Texto + . + Texto (mínimo 2 letras)"

    // REINICIAR ESTADO: Quitar errores de intentos anteriores
    input?.classList.remove('invalid');
    if (errorSpan) {
      errorSpan.innerText = "";
      errorSpan.classList.remove('show');
    }

    // VALIDACIÓN
    if (!emailRegex.test(email)) {

      input?.classList.add('invalid');// Input en rojo

      if (errorSpan) {                // Mensaje personalizado
        errorSpan.innerText = "El formato del email no es válido (ej: usuario@servidor.com)";
        errorSpan.classList.add('show');
      }

      input?.focus();
      return;
    }


    if (email && currentPdfUrl) {

      try {
        const response = await axios.post('http://localhost:3000/pdfs/download', {
          email: email,
          pdf_name: currentPdfTitle
        });

        // No hace falta hacer .json(), los datos están en response.data
        console.log('Respuesta del servidor:', response.data);

      } catch (error) {
        console.error('Error con Axios:', error);
      }





      const link = document.createElement('a'); // Crear un elemento anchor
      link.href = currentPdfUrl;
      link.setAttribute('download', '');        // Asignar el modo Descarga
      link.style.display = 'none';              // Hacerlo invisible par ael navegador
      document.body.appendChild(link);
      link.click();                             // Simular que se hace clic en el anchor
      document.body.removeChild(link);          // Eliminarlo

      modal.close();
      emailForm.reset();
    }
  });
}

// Ejecutar
setupModal();
