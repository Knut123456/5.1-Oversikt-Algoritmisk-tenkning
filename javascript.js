let mat = 3
let penger = 0
let salg = 0
let populæritet = 0
let billetsalg = 10
let skat = 0


function gimat() {
    mat = mat + 1;
    penger = penger - 20;
}
function mistermat () {
    if (mat <= 0) {
    penger = penger - 40;
}
mat = mat - 0.1;
}

function skatt() {
    skat = penger * 0,8;
    setTimeout(skatt, 60000) // dette gjør slik at skatt blir kjørt etter 1 min og så etter 1 min og om igjen
}

function populæritetfunc () {
    populæritet = populæritet + 1;
    setTimeout (populæritetfunc, 1000) // dette gjør slik at populæritetfunc blir kjørt etter 1 sekund og så etter 1 sekund og om igjen
}

function selgebilleter ( ) {
    if (populæritet > 0) {
        populæritet  = populæritet - 1;
        penger = penger + billetsalg; 
    } else {
        alert("du har ikke nok fans")
    }
    }
if (mat < 0) {
    alert("du har ikke nok pizza")
    penger = penger - 20;
} 

function skatt () {

}

populæritetfunc ()

function oppdatert() {
    document.getElementById("infopenger").innerHTML = "Penger " + penger  + "kr"
    document.getElementById("trengermat").innerHTML = "dyren har " + mat +" pizza"
    document.getElementById("populæritet").innerHTML = "du har " + populæritet +" fans"
    document.getElementById("skattinfo").innerHTML = "du skylder " + skat +" skatt gå til skatt klikk her for å se skatt"
    setTimeout(oppdatert, 1000) // dette gjør slik at oppdater blir kjørt etter 1 sekund og så etter 1 sekund og om igjen
}

oppdatert()




