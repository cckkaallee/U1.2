// Globala konstanter och variabler
const wordList = ["BLOMMA", "LASTBIL", "SOPTUNNA", "KÖKSBORD", "RADIOAPPARAT", "VINTER", "SOMMAR", "DATORMUS", "LEJON", "ELEFANTÖRA", "JULTOMTE", "SKOGSHYDDA", "BILNUMMER", "BLYERTSPENNA", "SUDDGUMMI", "KLÄDSKÅP", "VEDSPIS", "LJUSSTAKE", "SKRIVBORD", "ELDGAFFEL", "STEKPANNA", "KASTRULL", "KAFFEBRYGGARE", "TALLRIK", "SOFFBORD", "TRASMATTA", "FLYGPLAN", "FLYGPLATS", "TANGENTBORD"]; // Lista (array) med ord som ska väljas slumpmässigt

var selectedWord;   //Holds the word user should find out
var letterBoxes;    //Holds all the letters to select from  
var hangmanImg;     //Holds the image of the hangman
var hangmanImgNr;   //Holds the numner representing what imagwe to show
var msgElem;        //Holds the message shown to the user
var startGameBtn;   //Holds the representation to the start game button
var letterButtons;  //Holds the representation to all the letter buttons
var correctLettersCount = 0;// Counts how many letters are correct
var startTime;      //Holds the start time of the game 



// ------------------------------
// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {

    document.getElementById("startGameBtn").disabled = false;

    startGameBtn = document.getElementById("startGameBtn");

    document.getElementById("startGameBtn").onclick = startGame;


    letterButtons = document.getElementById("letterButtons").getElementsByTagName("button");

    for (let i = 0; i < letterButtons.length; i++) {
        letterButtons[i].onclick = guessLetter;
        letterButtons[i].disabled = true;
    }

    hangmanImg = document.getElementById("hangman");
    msgElem = document.getElementById("message");
} // End init

window.onload = init; // Se till att init aktiveras då sidan är inladdad
// ------------------------------



// Funktionen körs när användaren klickar på knappen för att starta spelet, då startas tidtagaren 
// och övriga funktioner påkallas.   
function startGame() {

    let now = new Date(); //holds current date

    startTime = now.getTime();


    document.getElementById("startGameBtn").disabled = true;

    randomWord();
    showLetterBoxes();


    // hangmanImg.innerHTML = "<img src =\'img/h0.png'";
    document.getElementById('hangman').src = "img/h0.png";

    hangmanImgNr = 0;

    for (let i = 0; i < letterButtons.length; i++) {
        letterButtons[i].disabled = false;
    }

    msgElem.innerHTML = "";

}


//Funktionen körs varje gång anändaren har gissat en bokstav. 
// Används för att beräkna när spelet är klart antingen som vinst eller förlust.
function guessLetter() {

    this.disabled = true;

    let letter = this.value; //Holds the curret letter 

    let letterFound = false; //Flag for if letter is found or not

    for (var i = 0; i < selectedWord.length; i++) {

        if (selectedWord.charAt(i) == letter) {
            letterBoxes[i].innerHTML = letter;
            letterFound = true;

            if (letterBoxes[i].innerHTML != "&nbsp") {
                correctLettersCount++;
            }
        }

    }


    if (letterFound == false) {
        hangmanImgNr++;
        document.getElementById('hangman').src = "img/h" + hangmanImgNr + ".png";

        if (hangmanImgNr == 6) {
            endGame(true);
        }

    }
    else if (correctLettersCount == selectedWord.length) {
        endGame(false);

    }

}



//Används för att få fram det ord som användaen skall gissa.
function randomWord() {

    let oldWord = selectedWord; //Hold the last word used

    while (oldWord == selectedWord) {

        let wordIndex = Math.floor(Math.random() * wordList.length);

        selectedWord = wordList[wordIndex];

    }


}



// Används för att visa användaren alla de olika bokstäver som finns att välja mellan. 
function showLetterBoxes() {

    let newCode = ""; //Holds the html code for letterboxes 


    for (let i = 0; i < selectedWord.length; i++) {
        newCode += "<span>&nbsp;</span>";
    }

    document.getElementById("letterBoxes").innerHTML = newCode;
    letterBoxes = document.getElementById("letterBoxes").getElementsByTagName("span");

}



//Används då spelet är klart. 
//Tid för spelet beräknas fram samt det som skall visas för användaren beroende på vinst eller förlust i spelet. 
function endGame(manHanged) {

    let runTime = (new Date().getTime() - startTime) / 1000; //Holds runtime value

    for (let i = 0; i < letterButtons.length; i++) {
        letterButtons[i].disabled = true;
    }

    document.getElementById("startGameBtn").disabled = false;



    if (manHanged == true) {
        msgElem.innerHTML = "Tvärr, gubbe hängdes. Rätt svar är " + selectedWord;
    }
    else {
        msgElem.innerHTML = "Gratulerar. Du kom fram till rätt ord";

    }

    msgElem.innerHTML += "<br> Det tog " + runTime.toFixed(1) + " sekunder.";

    document.getElementById("startGameBtn").disabled = false;

}