function mostrar()
{
	var respuesta;
	var num;
	var contador;
	var positivo;
	var negativo;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPar;
	var contadorImpar;
	var promedioPositivos;
	var promedioNegativos;
	var promedioTotal;

	respuesta="si";
	contador=0;
	positivo=0;
	negativo=0;
	contadorPositivos=0;
	contadorNegativos=0;
	contadorCeros=0;
	contadorImpar=0;
	contadorPar=0;
	promedioNegativos=0;
	promedioPositivos=0;

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
		if (num%10 == 0) {
			contadorCeros=contadorCeros+1;
		}
		if (num%2==0) {
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

alert("La cantidad de positivos es: "+contadorPositivos+
	" -- El promedio de positivos es: "+promedioPositivos+
	" -- La cantidad de negativos es: "+contadorNegativos+
	" -- El promedio de negativos es: "+promedioNegativos+
	" -- La cantidad de ceros es de: "+	contadorCeros+
	" -- La cantidad de numeros pares es: "+contadorPar+
	" -- La cantidad de numero impares: "+contadorImpar+
	" -- La diferencia entre positivos y negativos es: "+promedioTotal);

}//FIN DE LA FUNCIÓN