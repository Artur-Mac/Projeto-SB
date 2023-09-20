var data = new Date()
let hora = parseInt(data.getHours(), 10)
let minutos = parseInt(data.getMinutes(), 10)

let teste = document.getElementById("l" + "1")
teste.innerText = "Hello World"




for (var i = 1; i < 5; i++){
    
    horaOnibus = minutos + Math.floor(Math.random() * 46)
    if(horaOnibus > 60){
        hora++
        horaOnibus = horaOnibus - 60
    }

    console.log(i)
    
    let muda = document.getElementById('l' + i.toString())
    muda.innerText = addZeroes(hora, 2).toString()+ ':' + addZeroes(horaOnibus, 2).toString()

    
}

function addZeroes(num, len) {
    var numberWithZeroes = String(num);
  var counter = numberWithZeroes.length;
      
  while(counter < len) {
  
      numberWithZeroes = "0" + numberWithZeroes;
    
    counter++;
  
    }
  
  return numberWithZeroes;
}
console.log(data.getDay)
/*

*/
