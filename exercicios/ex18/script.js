

let num = []
let numList = document.getElementById('number')
let lista = document.getElementById('lista')
let res = document.querySelector('p#res')

{   

function Armazenar(){

    
    if (numList.value.length == 0 ||Number(numList.value) > 100 )
        {
        window.alert('Digite um número valido')
        }
   
        else{ 
       
        num.push(numList.value)
        let iten = document.createElement('option')
        iten.text = ` valor ${numList.value} adicionado`
       
        lista.appendChild(iten)
        res.innerHTML = ''
            }
        numList.value = ''
        numList.focus()

}
    function Finalizar(){
        if (num.length == 0 ){
            Window.alert('Adicione valores antes de finalizar')
    }
        else{
            num.sort()
            window.alert("Finalizar foi chamado")
            let totalv = num.length
            let soma  = 0
            

            for(let pos in num){
                soma+= Number(num[pos])
            }
            let media = soma/2
            res.innerHTML = ''
            window.alert(totalv)
            res.innerHTML += `<p> Ao todo temos ${totalv} números cadastrados </p>`
            res.innerHTML += `<p> O maior número é ${num[num.length - 1]} </p>`
            res.innerHTML += `<p> O menor número é ${num[0]}  </p>`
            res.innerHTML += `<p> A soma dos valores é ${soma}  </p>`
            res.innerHTML += `<p> A media dos valores é ${media}  </p>`

        }
}
}