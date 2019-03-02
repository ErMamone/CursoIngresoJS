/*Realizar el algoritmo que permita ingresar la marca de la marca de la gaseosa,la
cantidad de litros (validar entre 1 litro, 2 litros y 3 litros), el precio el cual debe ser
entre 30 y 100 y
por document.write:
a)La cantidad de precios pares.
b)La marca y litros del más barato
c)La cantidad de gaseosas que valen menos de 50.
d)El promedio del precio de todas las gaseosa.
e)El precio máximo y el mínimo de todas las gaseosa de menores de 3 litros.*/

var marca;
var lt;
var precio;
//1)
var preciosPares;
//2)
var ltBarato;
var marcaBarato;
var precioBarato;
//3)
var cantMenosDe50;
//4
var acumuladorPrecio;
var promedioPrecio;
//5)
var precioMaximo1L;
var precioMinimo1L;
var precioMaximo2L;
var precioMinimo2L;
var precioMaximo3L;
var precioMinimo3L;

var contador;
var confirmador;

lt=0;
precio=0;
preciosPares=0;
contador=0;
precioBarato=100;
ltBarato=0;
cantMenosDe50=0;
confirmador=true;
acumuladorPrecio=0;
promedioPrecio=0;
precioMaximo1L=30;
precioMaximo2L=30;
precioMaximo3L=30;
precioMinimo1L=100;
precioMinimo2L=100;
precioMinimo3L=100;

while(confirmador==true){
	marca=prompt("Ingrese marca de la gaseosa");

	lt=prompt("Ingrese cantidad de litros de gaseosa 1, 2 o 3");
	lt=parseInt(lt);
	while(!(lt==1 || lt==2 || lt==3)){
		lt=prompt("Error, ingrese 1, 2 o 3");
		lt=parseInt(lt);
	}
	precio=prompt("Ingrese el precio de la gaseosa");
	precio=parseInt(precio);
	while(!(precio>30 || precio<100)){
		precio=prompt("Error, ingrese un precio entre 30 y 100");
	}

	if (precio%2==0) {
		preciosPares++;
	}

	if (precio<precioBarato){
		ltBarato=lt;
		marcaBarato=marca;
		precioBarato=precio;
	}

	if (precio<=50) {
		cantMenosDe50++;
	}
	acumuladorPrecio=acumuladorPrecio+precio;

	switch (lt) {
		case 1:
			if (precioMaximo1L<precio) {
				precioMaximo1L=precio;
			}
			if (precioMinimo1L>precio) {
				precioMinimo1L=precio;
			}
		break;
		case 2:
			if (precioMaximo2L<precio) {
				precioMaximo2L=precio;
			}
			if (precioMinimo2L>precio) {
				precioMinimo2L=precio;
			}
		break;
		case 3:
			if (precioMaximo3L<precio) {
				precioMaximo3L=precio;
			}
			if (precioMinimo3L>precio) {
				precioMinimo3L=precio;
			}
		break;
	}

contador++;
confirmador=confirm("Dese agregar otra gaseosa?");
}

promedioPrecio=acumuladorPrecio/contador;

document.write("A)La cantidad de precios pares es de: "+preciosPares
	+"<br>B)La marca y litro de la mas barata es: "+marcaBarato+" "+ltBarato+"L"
	+"<br>C)La cantidad de gaseosas que valen menos de 50 es de: "+cantMenosDe50
	+"<br>D)El promedio de precios es de: "+promedioPrecio
	+"<br>E)El precio maximo de las gaseosas de 3L es de: "+precioMaximo3L+" y el precio minimo: "+precioMinimo3L
	+"<br> El precio maximo de las gaseosas de 2L es de: "+precioMaximo2L+" y el precio minimo: "+precioMinimo2L
	+"<br> El precio maximo de las gaseosas de 1L es de: "+precioMaximo1L+" y el precio minimo: "+precioMinimo1L);
