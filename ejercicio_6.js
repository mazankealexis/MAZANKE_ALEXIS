let meses=["enero","febrero","marzo","abril", "mayo","junio","julio", "agosto","septiembre","octubre","noviembre","diciembre"]
mes = 1

while (mes > 0){
mes =prompt(`ingrese un numero del 1 al 12 para saber que mes es.`)
    console.log(meses[mes-1])
}
