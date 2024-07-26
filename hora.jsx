import React from 'react'

const Hora = () => {
    function obtenerTiempo() {
        let fecha = new Date();
        let horas = fecha.getHours();
        let minutos = fecha.getMinutes();
        let segundos = fecha.getSeconds();
    
        horas = (horas < 10) ? "0" + horas : horas;
        minutos = (minutos < 10) ? "0" + minutos : minutos;
    
        segundos = (segundos < 10) ? "0" + segundos : segundos;
    
    
        let tiempo = horas + ": " + minutos + " :" + segundos
        let reloj = document.getElementById("reloj")
        reloj.innerHTML = tiempo
    
    }
    setInterval(() => {
        obtenerTiempo()
    
    }, 1000);
  return (
    <div>
         <div id="reloj"></div>
      
    </div>
  )
}

export default Hora
