let numeros=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
numeros=numeros.sort(()=>Math.random()-0.5) /*DESORDERNAR NUMEROS*/


let tarjetasDestapadas=0
let tarjeta1=null
let tarjeta2=null
let resultado1=''   
let resultado2=''
let aciertos=0
let mostrarAciertos= document.getElementById('aciertos')
let mostrarMovimientos= document.getElementById('movimientos')
let mostraTiempo=document.getElementById('tiempo')
let movimientos=0
let temporizador=false
let tiempo=30

function contarTiempo(){
    mitempo=setInterval(()=>{
        if (tiempo==0){
            clearInterval(mitempo)
            voltearTodas()
        }
        // else if(aciertos==8){
        //     clearInterval(mitempo)
        //     mostraTiempo.innerHTML=`Tardaste ${30-tiempo} segundos 🎉`    
        // } //Este código se implemento dentro de la función voltear
        else {
            tiempo--
            mostraTiempo.innerHTML=`Tiempo ${tiempo} segundos 😏`    
        }
        
    },1000 )
}

function voltearTodas(){
    mostraTiempo.innerHTML=`Time Over 😭`  
    for (let i=0;i<=15;i++){
        document.getElementById(`${i}`).innerHTML=numeros[i]
        document.getElementById(`${i}`).disabled=true
    }
}


function destapar(indice){
    tarjetasDestapadas++
    if(temporizador==false){
        temporizador=true 
        contarTiempo() 
    }
    if(tarjetasDestapadas==1){
        tarjeta1=document.getElementById(indice)
        tarjeta1.innerHTML=numeros[indice]
        tarjeta1.disabled=true
        resultado1=numeros[indice]
        
    } 
    else if (tarjetasDestapadas==2){
        tarjeta2=document.getElementById(indice)
        tarjeta2.innerHTML=numeros[indice]
        tarjeta2.disabled=true
        resultado2=numeros[indice]

        
        
        if(resultado1==resultado2){
            tarjetasDestapadas=0
            aciertos++
            movimientos++
            
        } else{
            movimientos++
           
            setTimeout(()=>{
            tarjetasDestapadas=0
            tarjeta1.disabled=false
            tarjeta2.disabled=false
            tarjeta1.innerHTML=''
            tarjeta2.innerHTML=''
            },500) //Se cambió el tiempo para que al equivocarse no se extienda
        }
        mostrarAciertos.innerHTML=`Aciertos: ${aciertos} 😃`
        mostrarMovimientos.innerHTML=`Movimientos: ${movimientos} 😛`
       
    }
    if(aciertos==8){
        clearInterval(mitempo)
        mostraTiempo.innerHTML=`Tardaste ${30-tiempo} segundos 🎉`    
    }
    
    
    
    
}

function reset(){
    location.reload()
}
