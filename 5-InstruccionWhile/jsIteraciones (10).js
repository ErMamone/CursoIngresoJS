function mostrar()
{
	var respuesta="si";
	var num;
	var contador=0;
	var positivo=0;
	var negativo=0;
	var respuesta='si';
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPar;
	var contadorImpar;
	var promedioPositivos;
	var promedioNegativos;
	var promedioTotal;

	contadorPositivos=0;
	contadorNegativos=0;
	contadorCeros=0;
	contadorImpar=0;
	contadorPar=0;

	while(respuesta=="si"){
		num=prompt("ingrese un numero");
		num=parseInt(num);
		if (num>0) {
			positivo=positivo+num;
			contadorPositivos=contadorPositivos+1;
		}else{
			negativo=negativo+num;
			contadorNegativos=contadorNegativos+1;
		}
		if (num==0) {
			contadorCeros=contadorCeros+1;
		}
		if (num/2) {
			contadorPar=contadorPar+1;
		}else{
			contadorImpar=contadorImpar+1;
		}
		contador++;
		respuesta=prompt("Desea ingresar mas numeros?");
	}

	promedioPositivos=positivo/contadorPositivos;
	promedioNegativos=negativo/contadorNegativos;
	promedioTotal=positivo+negativo;

alert("La cantidad de positivos es: "+	contadorPositivos+
	" -- el promedio de positivos es: "+	promedioPositivos+
	" -- La cantidad de negativos es: "+	contadorNegativos+
	" -- el promedio de negativos es: "+	promedioNegativos+
	" -- La cantidad de 0 es de: "+	contadorCeros+
	" -- y la diferencia entre positivos y negativos es: "+promedioTotal)



}//FIN DE LA FUNCIÓN