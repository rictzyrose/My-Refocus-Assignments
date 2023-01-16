var oxygen = 95;

function oxygenSaturation(oxygen) {
    if (oxygen > 95) {
        console.log ("Normal reading.");
    } else if (oxygen === 95) { 
        console.log("Acceptable to continue home monitoring.")
    } else if ((oxygen >= 92) && (oxygen < 95)) {
        console.log("Seek advice from health professionals.")
    } else if (oxygen < 92){
        console.log("Seek urgent medical advice.")
    } else {
        console.log("the value of the oxygen variable is not numerical.")
    }

}
oxygenSaturation(oxygen);

//Task #2

var pulse = 131;

function pulseRate(pulse) {
    if ((pulse >= 40) && (pulse <= 100)) {
        console.log ("Normal reading.");
    } else if ((pulse >= 101) && (pulse <= 109)) { 
        console.log("Acceptable to continue home monitoring.")
    } else if ((pulse >= 110) && (pulse <= 130)) {
        console.log("Seek advice from health professionals.")
    } else if (pulse >= 131){
        console.log("Seek urgent medical advice.")
    } else {
        console.log("the value of the pulse variable is not numerical.")
    }

}
pulseRate(pulse);
