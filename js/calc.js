document.addEventListener('DOMContentLoaded', function() {

    let calcButtons = document.querySelector(".buttons");
    let equalButton = document.querySelector(".equal");
    let inputField = document.getElementById("calculatorInput");
    let clearButton = document.querySelector(".clear");


    equalButton.addEventListener("click", calculate);

    clearButton.addEventListener("click", clear);


    calcButtons.addEventListener("click", function(event) {
        if (event.target.classList.contains("inputButton")) {
            addButtonToInput(event.target);
        }
    });

    function addButtonToInput(button) {
        inputField = document.querySelector(".inputField");
        inputField.value = inputField.value + button.textContent;
    }

    function calculate() {
        let expression = inputField.value;
        let calculationFunction = new Function('return ' + expression);
        let result = calculationFunction();
        inputField.value = result;
    }

    function clear() {
        inputField.value = "";
    }
});