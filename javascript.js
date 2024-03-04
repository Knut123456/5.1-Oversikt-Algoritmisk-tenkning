let mat = 0
let penger = 0

function gimat() {
    mat = mat + 1
    penger = penger - 20
    matmengde()
}

function inf() {
    document.getElementById("trengermat").innerHTML = "dyren trenger mat" + mat
}

function matmengde() {
    document.getElementById("trengermat").innerHTML = "dyren trenger mat" + mat
}


function bilderdyr() {
    window.location.href = "dyr.html";
}

function oppgradering() {
    window.location.href = "oppdatering.html";
}

function matlink() {
    window.location.href = "mat.html";
}

function skatt() {
        window.location.href = "skatt.html";
    }


