/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{		
	var primernumero;
	var segundonumero;
	var suma;

	primernumero=numeroUno.value;
	segundonumero=numeroDos.value;

	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero)

	suma=primernumero+segundonumero;

	alert("La suma es: "+suma);
	
}

function restar()
{
	var primernumero;
	var segundonumero;
	var suma;

	primernumero=numeroUno.value;
	segundonumero=numeroDos.value;

	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero)

	resta=primernumero-segundonumero;

	alert("La suma es: "+resta);
	
}

function multiplicar()
{ 
		var primernumero;
	var segundonumero;
	var suma;

	primernumero=numeroUno.value;
	segundonumero=numeroDos.value;

	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero)

	multiplicacion=primernumero*segundonumero;

	alert("La suma es: "+multiplicacion);
}

function dividir()
{
	var primernumero;
	var segundonumero;
	var suma;

	primernumero=numeroUno.value;
	segundonumero=numeroDos.value;

	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero)

	divi=primernumero/segundonumero;

	alert("La suma es: "+divi);
	
}

