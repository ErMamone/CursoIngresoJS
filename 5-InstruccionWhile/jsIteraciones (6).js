function mostrar()
{
	var num1;
	var contador=0;
	var acumulador=0;

	

	while(contador<5){
	num1=prompt("ingrese un numero");
	
	num1=parseInt(num1);
	contador++;
	acumulador=acumulador+num1;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN