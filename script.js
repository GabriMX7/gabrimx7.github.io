// Simulando uma atualização (ajuste o tempo conforme necessário)
const progressBar = document.querySelector('.progress');
let width = 0;

function updateProgress() {
  if (width >= 100) {
    clearInterval(interval);
    // Redirecionar para a página inicial após a atualização
    window.location.href = "/";
  } else {
    width++;
    progressBar.style.width = width + '%';
  }
}

const interval = setInterval(updateProgress, 100);
