/*Realizar el algoritmo que permita el ingreso por prompt de las velocidades en
kilómetros (validar entre 0 y 250) , el tipo de combustible, validar el tipo “s” o “l”
para solido o liquido, de 5 vehículos de prueba ,informar por alert:
1-El promedio de las velocidades totales.
2-La velocidad más baja y el tipo de combustible de ese vehículo.
3-La cantidad de combustibles líquidos que su velocidad supere los 100
kilómetros.
4-la velocidad más alta de los de combustible sólido*/

var km;
var combustible;
var autos;
var promedioVel;
var velBaja;
var tipoBaja;
var liqY100;
var altaSolido;
var promedio;

km=0;
autos=0;
liqY100=0;
velBaja=250;
altaSolido=0;
promedio=0;
promedioVel=0;

while(autos<5){
km=prompt("Ingrese una velocidad entre 0 y 250km/h");
km=parseInt(km);
	while(km>250 || km==0)
	{
		km=prompt("Error, ingrese una velocidad entre 0 - 250");
		km=parseInt(km);
	}
promedioVel=promedioVel+km;

combustible=prompt("Ingrese si el combustible es liquido o solido con la letra L o S");
	while(!(combustible=="L" || combustible=="S"))
	{
		combustible=prompt("Error, ingrese bien la letra 'L' o 'S'");
	}

if (km<velBaja) {
	velBaja=km;
	tipoBaja=combustible;
}

if (combustible=="L" && km>=100) {
	liqY100++;
}

if (combustible=="S" && altaSolido<km) {
	altaSolido=km;
}

	autos++;
}
autos=parseInt(autos);

promedio=promedioVel/autos;

alert("1) El promedio de velocidades totales es:"+promedio+"km/h"
	+"\n 2) La velocidad mas baja es: "+velBaja+"km/h"
	+"\n 3) La cantidad de combustibles liquidos que superan los 100km/h son: "+liqY100
	+"\n 4) La velocidad mas alta de los combustibles solidos es: "+altaSolido+"km/h");
