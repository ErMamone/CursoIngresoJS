/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo2;
	var porcentajeDeseado;
	var basico;
	var final;

	sueldo2=importe.value;

	sueldo2=parseInt(sueldo2);
	porcentajeDeseado=25;
	basico=100;

	final=sueldo2-((sueldo2*porcentajeDeseado)/basico);
	
	resultado.value=final;
	
}
