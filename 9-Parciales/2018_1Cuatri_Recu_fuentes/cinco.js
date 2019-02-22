function mostrar()
{//solo switch
//cada habitacion de un hotel tiene un precio, hay promociones segun el tipo de pago, 
//si es con tarjeta visa un 10%, si es con paypal 15%, por mercadopago 10%, 
//efectivo un 20% y cualquier otro medio un 5;
//si compraste el paquete todoincluido y pagas con paypal se te suma un 10% de descuento
//si pagas en efectivo tenes varias opciones del paquete solo desayunos te suma un 10% al descuento. 
//si el paquete es todoincluido te suma un 15% para el resto de los paquetes no hay descuento

var promicion;
var formaDePago;
var descuento;

promocion=prompt("Ingrese su promicion","todoincluido o solo desayuno");
formaDePago=prompt("Ingrese su forma de pago","visa, efectivo, paypal, otros");

	switch(formaDePago)
	{
		case "visa":
		case "mp":
			descuento=10;
		break;

		case "paypal":
			switch(promocion)
			{
				case "todoincluido":
					descuento=25;
				break;
				default:
					descuento=15;
				break;
			}
		break;

		

		case "efectivo":
			switch(promocion)
			{
				case "solo desayuno":
					descuento=30;
				break;
				case "todoincluido":
					descuento=35;
				break;
				default:
					descuento=20;
				break;
			}
		break;

		default:
			descuento=5;
		break;
	}

alert("La promocion es: "+promocion+" ---- el descuento es de :"+descuento+"%");

}



