function mostrar()
{
	var num1;
	var num2;
	var num3;
	var num4;
	var descuento;
	var suma;
	var total;
	var mayor;
	var mensaje;
	var desc;

	num1=prompt("Ingrese el primer valor");
	num2=prompt("Ingrese el segundo valor");
	num3=prompt("Ingrese el tercer valor");
	num4=prompt("Ingrese el cuarto valor");

	num1=parseInt(num1);
	num2=parseInt(num2);
	num3=parseInt(num3);
	num4=parseInt(num4);

	suma=num1+num2+num3+num4;

	if (num1>num2 && num1>num3 && num1>num4) {
		mayor=num1;
		mensaje="El numero 1 es el mayor: "+num1;
	}else{
		if (num2>num1 && num2>num3 && num2>num4) {
			mayor=num2;
		mensaje="El numero 2 es el mayor: "+num2;
		}else{
			if (num3>num1 && num3>num2 && num3>num4) {
				mayor=num3;
				mensaje="El numero 3 es el mayor: "+num3;
			}else{
					if (num4>num1 && num4>num2 && num4>num3) {
					mayor=num4;
					mensaje="El numero 4 es el mayor: "+num4;
					}else{
						mensaje="El numero mayor se repite";
				}
			}
		}
	}
	

	if (suma>=100) {
		descuento=10;
		//desc=true;
	}
	else{
		if (suma>=50) {
			descuento= 5;
			//desc=true;
		}
		else{
				aumento= 15;
				//desc=false;
				}}
//Metodos booleanos comentados, 2da posibilidad
/*
	if (desc==true) {
		total=suma-(suma*descuento/100);
	}else{
		total=suma+(suma*descuento/100);
	}
*/
	if (aumento/1) {
		total=suma+(suma*aumento/100);
	}else{
		total=suma-(suma*descuento/100);
	}

	alert("El total es= "+total+" ---- "+mensaje);

}
