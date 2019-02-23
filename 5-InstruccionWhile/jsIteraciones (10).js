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
	var promedioPositivos;
	var promedioNegativos;
	var promedioTotal;

	respuesta=true;
	contador=0;
	positivo=0;
	negativo=0;
	contadorPositivos=0;
	contadorNegativos=0;
	contadorCeros=0;
	contadorPar=0;
	promedioNegativos=0;
	promedioPositivos=0;

	while(respuesta==true)
	{
		num=prompt("ingrese un numero");
		num=parseInt(num);

		if (num>0) 
		{
			positivo=positivo+num;
			contadorPositivos=contadorPositivos+1;
		}else
			{if (num<0) 
				{
				negativo=negativo+num;
				contadorNegativos=contadorNegativos+1;
				}
				else{
					contadorCeros=contadorCeros+1;
				}
			}
		if (num%2==0) 
		{
			contadorPar=contadorPar+1;
		}

		contador++;
		respuesta=confirm("Presiona 'Aceptar' o la tecla 'Enter' para ingresar otro numero, sino presione cancelar");
	}

	promedioPositivos=positivo/contadorPositivos;
	promedioNegativos=negativo/contadorNegativos;
	promedioTotal=positivo+negativo;

	document.write("//////_1) La suma de Negativos es: "+negativo);
	document.write("<br>//////_2) La suma de positivos es: "+positivo);
	document.write("<br>//////_3) La cantidad de positivos es: "+contadorPositivos);
	document.write("<br>//////_4) La cantidad de negativos es: "+contadorNegativos);
	document.write("<br>//////_5) La cantidad de ceros es de: "+contadorCeros);
	document.write("<br>//////_6) La cantidad de numeros pares es: "+contadorPar);
	document.write("<br>//////_7) El promedio de positivos es: "+promedioPositivos);
	document.write("<br>//////_8) El promedio de negativos es: "+promedioNegativos);
	document.write("<br>//////_9) La diferencia entre positivos y negativos es: "+promedioTotal);

}//FIN DE LA FUNCIÓN