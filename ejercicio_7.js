var valores = [true, false, 2, "hola", "mundo", 3, "char"];
let letras = []
let numeros = []
let menorMayor=[2]
for (let posicion of valores) {
    if(typeof(posicion) === "string")
       letras.push(posicion)
    else if(typeof(posicion) === "number")
        numeros.push(posicion)
}

 for (x = 0 ; x < 3; x++ ){
    menorMayor[x]=letras[x].length
}
let resultado = menorMayor.sort()
document.write(resultado + `son los numeros de menor a mayor 
segun su cantidad de letras`)


//var valores = [true, false, 2, "hola", "mundo", 3, "char"];

let suma = numeros[0]+numeros[1]
let division = numeros[0]/numeros[1]
alert( `la suma de ${numeros[0]} + ${numeros[1]} es ${suma} `  )
alert( `la division de ${numeros[0]} / ${numeros[1]} es ${division} `  )
let resta = numeros[0]-numeros[1]
document.write( `<br> la resta de ${numeros[0]} - ${numeros[1]} es ${resta}<br>`  )


