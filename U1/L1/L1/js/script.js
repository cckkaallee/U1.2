
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
function areaCalculations() {

    var length;
    var width;
    var area;

    length = Number(input1Elem.value);
    width = Number(input2Elem.value);


    area = length * width;

    resultElem.innerHTML = "<p>Rektangelns area är " + area + " m<sup>2</sup></p>";

    area = 3.14 * length * width / 4;

    resultElem.innerHTML += "<p>Elipsens area är " + area + " m<sup>2</sup></p>";

    area = (length + 5) * width;

    resultElem.innerHTML += "<p> Längden +5 ger rektangelns area " + area + " m<sup>2</sup></p>";

    // Egna tillägg

    area = (length * 1.5) * (width + 3);

    resultElem.innerHTML += "<p> Då längden ökas med 50% och bredden med 3 blir rektangelns area " + area + " m<sup>2</sup></p>";


    area = ((length * width) / 2) * 10.76391041671
    // Referens till konvertering 
    // https://www.google.com/search?q=convert+m2+to+foot2&sxsrf=ALeKk02vye1b67qaIpcQ_wETFRtVIHXn5w%3A1627399164635&ei=_CMAYZWRJoiRrwTT2LfgCA&oq=convert+m2+foot&gs_lcp=Cgdnd3Mtd2l6EAMYADIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgcIABBHELADOgQIIxAnOggIABAWEAoQHjoECAAQDUoECEEYAFDl6gVY4u8FYKr9BWgCcAJ4AIABWogB6gKSAQE1mAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=gws-wiz


    resultElem.innerHTML += "<p> Triangelns area blir " + area + " kvadratfot<sup>2</sup></p>";



}


