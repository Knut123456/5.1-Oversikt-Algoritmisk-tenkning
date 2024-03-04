let mat = 0
let penger = 0
let salg = 0

function gimat() {
    mat = mat + 1;
    penger = penger - 20;
}


function oppdatert() {
    document.getElementById("infopenger").innerHTML = "Penger " + penger  + "kr"
    document.getElementById("trengermat").innerHTML = "dyren har " + mat +" pizza"
    
    setTimeout(oppdatert, 1000)
}

oppdatert()




