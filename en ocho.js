/*Realizar el algoritmo que permita iterar el ingreso de dos datos, un país y la
superficie de su territorio (validar) hasta que el usuario quiera e informar al terminar
el ingreso por document.write:
1-La cantidad de países con superficie impar.
2-La cantidad de países con superficie menor a 100
3-La cantidad de países con superficie igual a 100
4-El nombre del primer país que superó los 100 de superficie
5-El promedio de kilómetros ingresados.
6-El nombre del que menos territorio tiene.*/
var pais;
var superficie;
var cantSImpar;
var cantSmenor100;
var cantSigual100;
var primero100;
var promedioKM;
var menorKM;
var nombreMenor;
var confirmar;
var el100;
var contador;
var menorSup;

superficie=0;
cantSigual100=0;
cantSmenor100=0;
cantSImpar=0;
promedioKM=0;
confirmar=true;
el100=100;
contador=0;
menorSup=0;
nombreMenor=" ";

while(confirmar==true){
	pais=prompt("Ingrese un pais");
	superficie=prompt("Ingrese la superficie de tal pais");
	superficie=parseInt(superficie)
	while(superficie==0){
		superficie=prompt("Error, ingrese un numero valido para la superficie");
		superficie=parseInt(superficie);
	}
if (superficie%2==1) {
	cantSImpar++;
}
if (superficie<100) {
	cantSmenor100++;
}
if (superficie==100) {
	cantSigual100++;
}
if (superficie>el100) {
	primero100=pais;
	el100=999999999999;
}

promedioKM=promedioKM+superficie;

menorKM=100;
if (superficie<=menorKM) {
	nombreMenor=pais;
	menorSup=superficie;
}
contador++;
confirmar=confirm("Desea seguir agregando paises? Presione 'Enter' para continuar o presione 'Cancelar' para terminar");
}

promedio=promedioKM/contador;
document.write("1) La cantidad de paises imapares son: "+cantSImpar
	+"<br>2) La cantidad de paises con superficie menor a 100 es: "+cantSmenor100
	+"<br>3) La cantidad de paises con superficie igual a 100 es: "+cantSigual100
	+"<br>4) El nombre del primer pais que supero los 100 es: "+primero100
	+"<br>5) El promedio de km ingresados es de : "+promedio
	+"<br>6) El que menos territorio tiene es: "+nombreMenor+" con "+menorSup+" de superficie.");