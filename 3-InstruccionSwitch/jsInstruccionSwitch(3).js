function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch	(mesDelAño){
	case "Enero":
	mensaje=" este mes tiene 30 o más días" ;
	break;
	case "Febrero":
	mensaje=" este mes no tiene más de 29 días.";
	break;
	case "Marzo":

	case "Abril":

	case "Mayo":

	case "Junio":

	case "Julio":

	case "Agosto":

	case "Septiembre":

	case "Octubre":

	case "Noviembre":

	case "Diciembre":
	mensaje="este mes tiene 30 o más días";
	break;
}
alert (mesDelAño+":"+mensaje);
	
	


}//FIN DE LA FUNCIÓN