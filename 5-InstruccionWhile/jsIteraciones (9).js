function mostrar()
{
	var contador;
	var numMayor;
	var numMenor;
	var num;
	var respuesta;
	var comprobador;
	// declarar variables
	
	respuesta='si';
	contador=0;
	comprobador=true;

	while(respuesta=='si')
	{
		num=prompt("ingrese un numero");
		num=parseInt(num);
		if(comprobador==true)
		{
			numMayor=num;
			numMenor=num;
			comprobador=false;
		}else
		{
			if (numMayor<=num) 
			{
				numMayor=num;
			}
			if (num<numMenor) 
			{
				numMenor=num;
			}
		}
		contador++;
		respuesta=prompt("Desea ingresar mas numeros?");
	}
	numMayor=parseInt(numMayor);
	numMenor=parseInt(numMenor);
	maximo.value=numMayor;
	minimo.value=numMenor;
	alert("La cantidad de numero agregados son: "+contador);
}//FIN DE LA FUNCIÓN