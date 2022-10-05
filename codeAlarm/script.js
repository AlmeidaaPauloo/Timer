const startTimer = (duracao, display) => {
  let tempo = duracao;
  const intervalo = setInterval(() => {
    let hr = parseInt(tempo % 60);
    let min = parseInt(tempo % 60);
    let seg = parseInt(tempo % 60);

    hr = hr <10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    seg = seg < 10 ? "0" + seg : seg;

    display.textContent = hr +":" + min + ":" + seg
    
    if (tempo === 0) {
      clearInterval(intervalo)
      const inicio = document.getElementById('inicio')
      inicio.style.display = 'flex';
      display.style.display = 'none';

    } else {
      tempo -= 1;
    }

  }, 1000);
}

window.onload = () => {
  const inicio = document.getElementById('inicio')
  const btnTimer = document.getElementById('btnTimer');
  btnTimer.addEventListener('click', ()=>{
    let inputHoras = document.getElementById('inputHoras').value;
    let inputMinutos = document.getElementById('inputMinutos').value;
    let inputSegundos = document.getElementById('inputSegundos').value;

    if (!inputHoras || inputHoras < 0) inputHoras = 0;
    if (!inputMinutos || inputMinutos < 0) inputMinutos = 0;
    if (!inputSegundos || inputSegundos < 0) inputSegundos = 0;

    const tempo = parseInt(inputSegundos) + parseInt(inputMinutos)*60 + parseInt(inputHoras)*2;
    var duracao = tempo; //conversão para segundos
    var display = document.querySelector("#timer");
    inicio.style.display = 'none';
    display.style.display = 'block';
    startTimer(duracao, display);

  });

}