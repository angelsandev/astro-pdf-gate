// src/scripts/modal.ts

export function setupModal(): void {
  // Indicar a TS qué tipo de elemento es cada uno para tener autocompletado
  const modal = document.querySelector<HTMLDialogElement>('#download-modal');
  const emailForm = document.querySelector<HTMLFormElement>('#email-form');
  const pdfNameSpan = document.querySelector<HTMLSpanElement>('#pdf-name');
  const closeBtn = document.querySelector<HTMLButtonElement>('#close-modal');
  
  let currentPdfUrl: string | null = "";

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
      const title = titleElement?.innerText || "Documento";
      
      currentPdfUrl = btn.getAttribute('data-pdf-url'); 
      
      if (pdfNameSpan) pdfNameSpan.innerText = title;
      
      
      modal.showModal();
    }
  });

  closeBtn?.addEventListener('click', () => {
    modal.close();
  });

  // Cerrar al hacer clic fuera del contenido blanco
  modal.addEventListener('click', (e: MouseEvent) => {
    if (e.target === modal) modal.close();
  });

  emailForm?.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();
    
    // Buscar el input específicamente
    const input = emailForm.querySelector<HTMLInputElement>('input[type="email"]');
    const email = input?.value;

    if (email && currentPdfUrl) {
      const link = document.createElement('a');
      link.href = currentPdfUrl;
      link.setAttribute('download', ''); 
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      modal.close();
      emailForm.reset();
    }
  });
}

// Ejecutar
setupModal();
