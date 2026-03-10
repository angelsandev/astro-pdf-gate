// src/scripts/modal.js
export function setupModal() {
  const modal = document.querySelector('#download-modal');
  const emailForm = document.querySelector('#email-form');
  const pdfNameSpan = document.querySelector('#pdf-name');
  const closeBtn = document.querySelector('#close-modal');
  
  let currentPdfUrl = "";

  if (!modal) {
    console.error("No se encontró el modal con ID #download-modal");
    return;
  }

  document.addEventListener('click', (e) => {
    // Usamos closest para capturar el clic aunque sea en el texto del botón
    const btn = e.target.closest('.btn-primary');
    
    if (btn && btn.closest('.pdf-card')) {
      console.log("¡Botón detectado!");
      const card = btn.closest('.pdf-card');
      const title = card.querySelector('.pdf-title').innerText;
      
      // Capturamos la URL del atributo data
      currentPdfUrl = btn.getAttribute('data-pdf-url'); 
      console.log("URL a descargar:", currentPdfUrl);
      
      if (pdfNameSpan) pdfNameSpan.innerText = title;
      modal.showModal();
    }
  });

  closeBtn?.addEventListener('click', () => {
    modal.close();
    });

  emailForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;

    if (email && currentPdfUrl) {
      // Simular descarga
      const link = document.createElement('a');
      link.href = currentPdfUrl;
      link.setAttribute('download', ''); 
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      modal.close();
      e.target.reset();
      alert("Descarga iniciada.");
    }
  });
}

// Esto asegura que funcione tanto en carga normal como con transiciones de Astro
setupModal();