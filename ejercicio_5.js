let dato, resultado;
//declaramos las variables

val1 = window.prompt("Introduce tu nombre", "..."); //nombre que el usuario ingrese
/*cargamos la variable val1, a travez de un prompt
ingresado por el usuario*/

val2 = window.prompt("Introduce tu apellido", "..."); //apellido que el usuario ingrese
/*cargamos la variable val2, a travez de un prompt
ingresado por el usuario*/

resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;
/*se le asigna a la variable resultado , la lina tipo texto
mas los valores ingresados por el usuario
*/
document.write(resultado);
//muestra por pantalla el contenido de la variable resultado

//ACA VAMOS A HACER UN CAMBIO DE PRUEBA