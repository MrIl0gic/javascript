
function CalcPA(){
    var inum = document.querySelector('#inumber').value
         
    var fnum = document.querySelector('#fnumber').value
    var pnum = document.querySelector('#pnumber').value
    var nunCalc = document.getElementById('numCalc')

    if(inum.length == 0 || fnum.length == 0 || pnum.length == 0){
        window.alert('Erro faltam dados a serem digitados!')
    }
    else{
        nunCalc.innerHTML ='Contando . . .'
        let i = Number(inum)
        let f = Number(fnum)
        let p = Number(pnum)
        if( p <= 0){
            window.alert('Passo invalido. Considerando passo 1')
            p = 1
        }
        if(i < f){
             for(let c = i; c <= f ; c += p){ 

                nunCalc.innerHTML += `${c} \u{1F449} \u{1F3FD}  `
       
    }
                 nunCalc.innerHTML += `u\{1f3c1}  `
                }
        else {
            for(let c = i; c >= f ; c -= p)
                { 

                nunCalc.innerHTML += `${c} \u{1F449}\u{1F3FD}  `
                
                }
            }
            nunCalc.innerHTML += `\u{1f3c1}  `
        }
}
    
