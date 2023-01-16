//Task#1
function convertToKelvinC(Celius){
  let kelvin = Celius + 273.15;
  return kelvin;

}

function converToKelvin(Fahrenhiet){
  let kelvin = (Fahrenhiet+ 459.67) * 5/9;
  return kelvin;
}


console.log(convertToKelvinC(29))
console.log(converToKelvin(84.2))

//Task#2
function computeTip(totalBill){
  let tip = totalBill * .1 ; 
  return tip;
}

console.log(computeTip(200))