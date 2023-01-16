let weight = 65;

let height = Math.pow(1.65, 2);

let TotalBMI = weight / height;
console.log(TotalBMI)


function BmiResult (TotalBMI) {
  if (TotalBMI > 30){
    console.log("Obese")
  }
  else if ((TotalBMI >= 18.8) && (TotalBMI <= 24.9)) {
    console.log("Healty BMI")
  }
  else if ((TotalBMI >= 25) && (TotalBMI < 29)) {
    console.log("overweight")
  }
  else {
    console.log("the value of the oxygen variable is not numerical.")
  }
}

BmiResult(TotalBMI);


