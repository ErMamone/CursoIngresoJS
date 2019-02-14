
function mostrar()
{
	var mascota1;
	var mascota2;
	var peso1;
	var peso2;
	var suma;

	mascota1 = prompt("Ingrese el nombre de su mascota: ", "");
	mascota2 = prompt("Ingrese el nombre de su segunda mascota: ", "");

	peso1 = prompt("Ingrese el peso de la primera mascota: ","");
	peso2 = prompt("Ingrese el peso de la segunda mascota: ","");

	peso1= parseInt(peso1);
	peso2= parseInt(peso2);

	suma = peso1+peso2;

	alert("Tenes dos mascotas"+mascota1+" y "+mascota2+ ", que pesan "+peso1+" y "+peso2+" kg, la suma de estos es de: "+suma);
}
