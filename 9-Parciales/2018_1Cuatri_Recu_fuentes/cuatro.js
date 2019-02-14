function mostrar()
{
	var precio;
	var precioIva;
	var precioPropina;
	var precioTotal;
	var iva;
	var propina;
	var cantPersonas;
	var precioDividido;

	precio = prompt("Precio a pagar:","1000");

	cantPersonas = prompt("Cantidad de personas que pagan", "5");

	precio = parseInt(precio);
	cantPersonas= parseInt(cantPersonas);

	iva= 21/100;
	precioIva= precio*iva;

	propina= 10/100;
	precioPropina= precio*propina;

	precioTotal=precioPropina+precioIva+precio;

	precioDividido= precioTotal/cantPersonas;



	alert("El precio es: "+precio+", el iva es "+precioIva+", la propina es del 10%: "+precioPropina+" y el precio total es de: "+precioTotal+" Cada uno debe pagar: "+precioDividido);
}
//en un restuariante un grupo de amigos quiere saber cuanto debe pagar cada uno del total, 
//recordar que se debe agregar el 10% de propina, y que los precios no incluyen el iva(21%)
//mostrar toda la informacion en un solo alert