
function Calcular()
{
      var tnumber = document.querySelector('#inumber').value
      var tabuada = document.getElementById('tabuada')
      var num = Number(tnumber)

      if( tnumber.length == 0){
        window.alert('Por favor digite um Número válido')
      }
      

      for(i = 0 ; i <= 10 ; i++)
        {
        
        var cnum = num *i 
        let item = document.createElement('option')
        item.text = `${num} x ${i} = ${cnum}`
        tabuada.appendChild(item)

        
      }
}
