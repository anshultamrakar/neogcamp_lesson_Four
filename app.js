var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

console.log(txtInput)

function clickHandler () {
    console.log("clicked!");
    console.log("input", txtInput.value);
    outputDiv.innerText = "ajsjsjsjsjsjsj  " + txtInput.value;
}


btnTranslate.addEventListener("click", clickHandler)

