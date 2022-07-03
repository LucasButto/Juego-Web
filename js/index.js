document.getElementById('player').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 30;
necesarios = 30;

function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*400);
   randNum2 =  Math.round(Math.random()*400);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (puntos == necesarios) {
   	alert("ganaste");
      document.location.reload();
   }
}


function restarTiempo() {
	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
	if (tiempo == 0) {
		tiempo = 0;
		puntos = 0;
      alert("Perdiste");
      document.location.reload();
	}
}

setInterval(restarTiempo,1000);