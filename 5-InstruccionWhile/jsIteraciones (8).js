function mostrar()
{
	var num;
	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	while(respuesta=="si"){
		num=prompt("ingrese un numero");
		num=parseInt(num);
		if (num>0) {
			positivo=positivo+num;
		}else{
			negativo=negativo*num;
		}
		contador++;
		respuesta=prompt("Desea ingresar mas numeros?");
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN