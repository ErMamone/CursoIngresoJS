function mostrar()
{
	var num;
	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=="si"){
		num=prompt("ingrese un numero");
		num=parseInt(num);
		acumulador=acumulador+num;
		contador++;
		respuesta=prompt("Desea ingresar mas numeros?");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN