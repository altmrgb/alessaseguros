document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os elementos com a classe "animate"
    const elements = document.querySelectorAll('.animate');
  
    // Função para verificar visibilidade dos elementos usando IntersectionObserver
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); // Remove a classe caso saia da viewport
        }
      });
    });
  
    // Observar cada elemento com a classe "animate"
    elements.forEach(element => observer.observe(element));
  });
  