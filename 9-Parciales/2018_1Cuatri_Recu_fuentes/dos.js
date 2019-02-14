function mostrar()
{
	var compra;
	var compraDescuento;
	var compraTotal;
	var iva;
	var descuento;

	compra = prompt("Ingrese la compra:","2000");

	compra = parseInt(compra);

	descuento = 10/100;

	compraDescuento= (compra*descuento)+compra;

	iva = 21/100

	compraTotal = (compraDescuento*iva) + compraDescuento;
	
	alert("Tu compra es de $"+compra+" tenes un descuento del 10%, queda en: "+compraDescuento+", mas el iva es de $"+compraTotal);
}
