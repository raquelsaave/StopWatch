function stopwatch() {
  var mili = 0;
  var min = 0;
  var seg = 0;
  window.start = setInterval(function () {
    mili++
    document.getElementById("minutos").innerHTML = min
    document.getElementById("segundos").innerHTML = seg
    document.getElementById("milisegundos").innerHTML = mili
    if (mili == 1000) {
      mili = 0
      seg++
      document.getElementById("minutos").innerHTML = min
      document.getElementById("segundos").innerHTML = seg
      document.getElementById("milisegundos").innerHTML = mili
      if (seg == 60) {
        seg = 0
        min++
        document.getElementById("minutos").innerHTML = min
        document.getElementById("segundos").innerHTML = seg
        document.getElementById("milisegundos").innerHTML = mili

      }
    }
  }, 1);
}

function stop() {
  clearInterval(window.start);
}

function reset() {
  clearInterval(window.start);
  document.getElementById("minutos").innerHTML = 0
    document.getElementById("segundos").innerHTML = 0
    document.getElementById("milisegundos").innerHTML = 0
}


