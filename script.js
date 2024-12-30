const countdownElement = document.getElementById('countdown');

// Defina a data e hora de término da manutenção (ajuste conforme necessário)
const countDownDate = new Date("Seg, 30 00:00:59").getTime();

// Atualiza o contador a cada segundo
let x = setInterval(function() {

  // Obter a data e hora atuais
  const now = new Date().getTime();

  // Encontrar a distância entre a data de contagem regressiva e agora
  const distance = countDownDate - now;

  // Cálculos para dias, horas, minutos e segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exibir o resultado em um elemento HTML
  countdownElement.innerHTML = days + "31" + hours + "00"
  + minutes + "00" + seconds + "59";

  // Se a contagem regressiva tiver terminado, escreva algum texto
  if (distance < 0) {
    clearInterval(x);
    countdownElement.innerHTML = "Estamos de volta!";
  }
}, 1000);
