
function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')


    if(fAno.value.length <= 3 || fAno.value > ano || fAno.value < (ano - 160)){
        window.alert('Verifique os dados novamente')
        
    }
    else{
        var fsex =document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            gen = 'Homem'
           if(idade < 10 ){

            img.setAttribute('src', '../img/manchild.jpg' )
           }

           else if( idade < 35){
            img.setAttribute('src', '../img/youngman.jpg')
           }

          else if(idade < 65){
            img.setAttribute ("src" , '../img/adultman.jpg')
           }

           else{
            img.setAttribute( 'src' , "../img/matureman.jpg")
           }

            }

        
        else if(fsex[1].checked){
            gen = 'Mulher'

            if(idade < 10 ){

                img.setAttribute('src', '../img/womanchild.jpg' )
               }
    
              else if( idade < 35){
                img.setAttribute('src', '../img/youngwoman.jpg')
               }
    
              else if(idade < 65){
                img.setAttribute ("src" , '../img/adultwoman.jpg')
               }
    
               else{
                img.setAttribute( 'src' , "../img/maturewoman.jpg")
               }
        }

        res.innerHTML = ` Detectamos ${gen} com ${idade} anos `
        res.style.textAlign = 'center'
        res.appendChild(img)
        


}
}