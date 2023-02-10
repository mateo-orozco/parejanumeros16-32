let numeros1 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
let numeros2 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16]
numeros1 = numeros1.sort(() => Math.random() - 0.5) /*DESORDERNAR NUMEROS*/
numeros2 = numeros2.sort(() => Math.random() - 0.5)

let tarjetasDestapadas = 0
let tarjeta1 = null
let tarjeta2 = null
let resultado1 = ''
let resultado2 = ''
let aciertos = 0
let mostrarAciertos = document.getElementById('aciertos')
let mostrarMovimientos = document.getElementById('movimientos')
let mostraTiempo = document.getElementById('tiempo')
let movimientos = 0
let temporizador = false
let tabla = document.getElementById('tabla')
let tiempo
let modo
function contarTiempo() {
    if (modo == 16) {
        tiempo = 30
    } else {
        tiempo = 150
    }
    mitempo = setInterval(() => {
        if (tiempo == 0) {
            clearInterval(mitempo)
            voltearTodas()
        }
        // else if(aciertos==8){
        //     clearInterval(mitempo)
        //     mostraTiempo.innerHTML=`Tardaste ${30-tiempo} segundos 🎉`    
        // } //Este código se implemento dentro de la función voltear
        else {
            tiempo--
            mostraTiempo.innerHTML = `Tiempo ${tiempo} segundos 😏`
        }

    }, 1000)
}

function voltearTodas() {
    mostraTiempo.innerHTML = `Time Over 😭`
    for (let i = 0; i <= 15; i++) {
        document.getElementById(`${i}`).innerHTML = numeros[i]
        document.getElementById(`${i}`).disabled = true
    }
}


function destapar(indice) {
    tarjetasDestapadas++
    let numeros
    if (modo == 16) {
        numeros = numeros1
    } else {
        numeros = numeros2
    }
    if (temporizador == false) {
        temporizador = true
        contarTiempo()
    }
    if (tarjetasDestapadas == 1) {
        tarjeta1 = document.getElementById(indice)
        tarjeta1.innerHTML = numeros[indice]
        tarjeta1.disabled = true
        resultado1 = numeros[indice]

    }
    else if (tarjetasDestapadas == 2) {
        tarjeta2 = document.getElementById(indice)
        tarjeta2.innerHTML = numeros[indice]
        tarjeta2.disabled = true
        resultado2 = numeros[indice]



        if (resultado1 == resultado2) {
            tarjetasDestapadas = 0
            aciertos++
            movimientos++

        } else {
            movimientos++

            setTimeout(() => {
                tarjetasDestapadas = 0
                tarjeta1.disabled = false
                tarjeta2.disabled = false
                tarjeta1.innerHTML = ''
                tarjeta2.innerHTML = ''
            }, 500) //Se cambió el tiempo para que al equivocarse no se extienda
        }
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 😃`
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 😛`

    }
    if (aciertos == modo / 2) {
        clearInterval(mitempo)
        mostraTiempo.innerHTML = `Tardaste ${modo - tiempo} segundos 🎉`
    }




}

function reset() {
    location.reload()
}
function start() {
    let cantidad = document.querySelectorAll(".cantidad")
    if (cantidad[0].checked) {
        modo = 16
        tabla.innerHTML = `<tr>

         <td><button id="0" onclick="destapar(0)"></button></td>
         <td><button id="1" onclick="destapar(1)"></button></td>
         <td><button id="2" onclick="destapar(2)"></button></td>
         <td><button id="3"onclick="destapar(3)"></button></td>
     </tr >
     <tr>
         <td><button id="4" onclick="destapar(4)"></button></td> 
         <td><button id="5" onclick="destapar(5)"></button></td> 
         <td><button id="6" onclick="destapar(6)"></button></td> 
         <td><button id="7" onclick="destapar(7)"></button></td> 
     </tr>
     <tr>
         <td><button id="8" onclick="destapar(8)"></button></td>
         <td><button id="9" onclick="destapar(9)"></button></td>
         <td><button id="10" onclick="destapar(10)"></button></td>
         <td><button id="11" onclick="destapar(11)"></button></td>
     </tr>
     <tr>
         <td><button id="12" onclick="destapar(12)"></button></td>
         <td><button id="13" onclick="destapar(13)"></button></td>
         <td><button id="14" onclick="destapar(14)"></button></td>
         <td><button id="15" onclick="destapar(15)"></button></td>
     </tr>`
    }
    if (cantidad[1].checked) {
        modo = 32
        tabla.innerHTML = `<tr>

         <td><button id="0" onclick="destapar(0)"></button></td>
         <td><button id="1" onclick="destapar(1)"></button></td>
         <td><button id="2" onclick="destapar(2)"></button></td>
         <td><button id="3"onclick="destapar(3)"></button></td>
         <td><button id="4" onclick="destapar(4)"></button></td> 
         <td><button id="5" onclick="destapar(5)"></button></td> 
         <td><button id="6" onclick="destapar(6)"></button></td> 
         <td><button id="7" onclick="destapar(7)"></button></td> 
     </tr >
     <tr>
         <td><button id="8" onclick="destapar(8)"></button></td>
         <td><button id="9" onclick="destapar(9)"></button></td>
         <td><button id="10" onclick="destapar(10)"></button></td>
         <td><button id="11" onclick="destapar(11)"></button></td>
         <td><button id="12" onclick="destapar(12)"></button></td>
         <td><button id="13" onclick="destapar(13)"></button></td>
         <td><button id="14" onclick="destapar(14)"></button></td>
         <td><button id="15" onclick="destapar(15)"></button></td>
     </tr>
     <tr>
         <td><button id="16" onclick="destapar(16)"></button></td>
         <td><button id="17" onclick="destapar(17)"></button></td>
         <td><button id="18" onclick="destapar(18)"></button></td>
         <td><button id="19"onclick="destapar(19)"></button></td>
         <td><button id="20" onclick="destapar(20)"></button></td>                   
         <td><button id="21" onclick="destapar(21)"></button></td> 
         <td><button id="22" onclick="destapar(22)"></button></td> 
         <td><button id="23" onclick="destapar(23)"></button></td> 
    </tr>
     <tr>
        <td><button id="24" onclick="destapar(24)"></button></td>
        <td><button id="25" onclick="destapar( 25)"></button></td>
        <td><button id="26" onclick="destapar(26)"></button></td>
        <td><button id="27" onclick="destapar(27)"></button></td>
        <td><button id="28" onclick="destapar(28)"></button></td>
        <td><button id="29" onclick="destapar(29)"></button></td>
        <td><button id="30" onclick="destapar(30)"></button></td>
        <td><button id="31" onclick="destapar(31)"></button></td>
         
     </tr>
     
     `
    }
    document.querySelector(`.start`).disabled =true
}