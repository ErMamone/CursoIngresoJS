function mostrar()
{
//tomo la edad  
var edad1;
var estado;

estado=estadoCivil.value;
edad1=edad.value;

if (edad1 < 17 && estado=="Casado" || estado=="Divorciado") {
	alert("Es muy pequeño para no ser soltero");
}

}//FIN DE LA FUNCIÓN