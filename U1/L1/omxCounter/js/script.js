
var input1Elem, input2Elem, resultElem;


//tar användar-input från användaren och sparar dessa värden i de definerade variablerna.

function init() {
input1Elem = document.getElementById("input1");
input2Elem = document.getElementById("input2");
resultElem = document.getElementById("result");

document.getElementById("runBtn").onclick = areaCalculations;



} // End init

window.onload = init;

// Beräknar area baserat på användar-input och presenterar sedan resultart i html för användaren.
function areaCalculations(){

    var length;
    var width;
    var area;

    length = Number(input1Elem.value);
    width = Number(input2Elem.value);


    area = length * width;

    resultElem.innerHTML = "<p>Rektangelns area är " + area + " m<sup>2</sup></p>";

    area = 3.14 * length * width / 4;

    resultElem.innerHTML += "<p>Elipsens area är " + area + " m<sup>2</sup></p>";

    area = (length +5) * width;

    resultElem.innerHTML += "<p> Längden +5 ger rektangelns area " + area + " m<sup>2</sup></p>";

 // Egna tillägg

    area = (length*1.5) * (width+3);

    resultElem.innerHTML += "<p> Då längden ökas med 50% och bredden med 3 blir rektangelns area " + area + " m<sup>2</sup></p>";


    area = (( (length*1.5) * (width+3)) / 2) * 3.28 ;


    resultElem.innerHTML += "<p> Triangelns area blir " + area + " kvadratfot<sup>2</sup></p>";



}


