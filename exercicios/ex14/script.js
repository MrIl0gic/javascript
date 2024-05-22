
function Carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data= new Date()
    var hora =  data.getHours()
    if(hora >= 0 && hora < 12  ){
        img.src = '../img/sunrise.png'
        document.body.style.background ='wheat'
    }
    else if(hora >= 12 && hora <= 18){
        img.src = '../img/sunset.png'
        document.body.style.background = '#b9846f'
       
    }

    else{
        img.src = '../img/evenning.png'
        document.body.style.background ='midnightblue'
    }

    msg.innerHTML =  `Agora são ${hora} horas.`


}