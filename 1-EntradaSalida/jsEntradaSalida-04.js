/* 
Santiago Manuel Simarro DIV E
E/S ej4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//declaro variable
	var nombreIngresado

	//guardo eld ato
	nombreIngresado=prompt("ingrese su nombre")

	//asigno nombre a la caja
	txtIdNombre.value = nombreIngresado

	//otra forma:
	//document.getElementById("txtIdNombre").value = nombreIngresado;
}


//txtIdNombre