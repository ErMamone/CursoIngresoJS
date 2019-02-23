function mostrar()
{	
	var alumnos;
	var sexo;
	var nota;
	var notaTotales;
	var notaBaja;
	var	sexoBaja;
	var cantV;
	var promedio;

	alumnos=0;
	notaTotales=0;
	notaBaja=1;
	cantV=0;

	while(alumnos<5)
	{
		sexo=prompt("Ingrese su sexo");

		while(sexo!='f' && sexo!='m'){
			sexo=prompt("Error, porfavor ingrese su sexo: ");
		}
		
	
		nota=prompt("Ingrese su nota(entre 1 y 10): ","");
		nota=parseInt(nota);

		
		while(nota!=0 && nota>10){
			nota=prompt("Error, ingrese su nota(entre 1 y 10): ","");
			nota=parseInt(nota);
		}
		

		notaTotales=notaTotales+nota;

		if (nota<notaBaja) {
			notaBaja=nota;
			sexoBaja=sexo;
		}

		if (sexo="m" && nota>=6) {
			cantV=cantV+1;
		}
		alumnos++;
	}

	promedio=notaTotales/5;
	alert("El promedio de notas totales es: "+promedio+"   La nota mas baja: "+notaBaja+" y el sexo es: "+sexoBaja+
		"   La cantidad de varones con mas de 6 es: "+cantV);

}
