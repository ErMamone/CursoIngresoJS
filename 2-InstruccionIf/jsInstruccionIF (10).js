function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var mensaje;

	numeroRandom=Math.floor((Math.random()*10)+1);
	console.log(numeroRandom);	

	if (numeroRandom>=9) {
		mensaje="Excelente";
	}else if (numeroRandom>=4) {
		mensaje="Aprobo";
	}else{
		mensaje="Vamos la proxima se puede";
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN