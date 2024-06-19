// let numeros =[]
// let suma
// for (let i = 0 ; i < 5; i++ ){
// numeros[i] = prompt(`ingrese las notas a promediar`)          
// }
// for (let i = 0 ; i < 5; i++ ){
// suma += numeros[i]
// }
// document.write(suma)
// for (let i = 0 ; i < 5; i++ ){        

                                           
/*HICE CON UN ARREGLO YA CARGADO, AL INTENATR CARGAR                                                                           
   ME TOMABA COMO CARACTER EJ 3+5+1 = 351 (SEGUIRE VIEND COMO SOLUCIONAR)   */



n = 5
var arreglo = [8, 5, 9, 8, 1]
var suma = 0
let prom
for (let i = 0 ; i < arreglo.length; i++ ){
    suma += arreglo[i]
}
console.log(suma)
 suma = suma / n
 prom = suma

if (prom <=5){
    console.log(`el promedio es menor de 5: ${prom} (REPROBADO)` )
}else if(prom <= 8){
    console.log(`el promedio es entre 6 a 8: ${prom} (APROBADO)`)
}
else if (prom > 8 ){
   console.log(`el promedio es mayor 8: ${prom} (SOBRESALIENTE)`)
}












