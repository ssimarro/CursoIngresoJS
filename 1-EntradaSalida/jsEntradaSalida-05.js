/*
Santiago Manuel Simarro DIV E
E/S ej5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//declaro variables
	var nombre;
	var edad;

	//guardar los datos en  las variables
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	//muestro alert
	alert("Usted se llama "+ nombre + " y tiene "+ edad + " años");
}






//txtIdNombre
//txtIdEdad