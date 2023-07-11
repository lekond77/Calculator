const displayInput = document.querySelector("#display-input p");
const output = document.querySelector("#output p");

const binaries = document.querySelector("#binary");
const decimal = document.querySelector("#decimal");
const hexadecimal = document.querySelector("#hexadecimal");
const slash = document.querySelector("#slash");
let input = "";

// Display value
// slash.value !== "A"  condition prevents other functions from running on click
function display(values) {
  if (slash.value !== "A") displayInput.innerHTML += values;
}

// Clean screen  if we are in the standard option otherwise in the conversion option
function cleanScreen() {
  if (slash.value === "/") {
    displayInput.innerHTML = "";
    output.innerHTML = "";
  } else {
    binaries.value = "";
    decimal.value = "";
    hexadecimal.value = "";
    input = "";
  }
}
//Clean last digital
function cleanLastDigit() {
  displayInput.innerHTML = displayInput.innerHTML.slice(0, -1);
}

// display to percent
function perCent() {
  if (displayInput.innerHTML !== "")
    output.innerHTML = eval(displayInput.innerHTML) / 100;
}
// To calcul
function calcul() {
  if (displayInput.innerHTML !== "")
    output.innerHTML = eval(displayInput.innerHTML);
}

// insert '-' to front
function insertMinustoFront() {
  displayInput.innerHTML = "-" + displayInput.innerHTML;
}

const secondFct = document.querySelector("#fct");
const buttonInput = document.querySelectorAll('input[type="button"]');

// disables buttons
function disabledInputButton(disabledElement) {
  if (disabledElement.disabled)
    buttonInput.forEach((element) => {
      element.disabled = false;
    });
}

// secund function displaying programer option

function secondFunction(selector, newValue, oldValue) {
  selector = document.querySelector(selector);
  selector.value === oldValue
    ? (selector.value = newValue)
    : (selector.value = oldValue);
}

buttonChangeMode = document.querySelectorAll("p button");

// changes the background color of the clicked element
function changeButtonColor(index0, index1, index2) {
  buttonChangeMode[index0].style.backgroundColor = "#00d300";
  buttonChangeMode[index1].style.backgroundColor = "#e9e9ed";
  buttonChangeMode[index2].style.backgroundColor = "#e9e9ed";
}

//change the values of some buttons to display hexadecimal values from 10 to 15
secondFct.addEventListener("click", () => {
  secondFunction("#slash", "A", "/");
  secondFunction("#times", "B", "X");
  secondFunction("#minus", "C", "-");
  secondFunction("#plus", "D", "+");
  secondFunction("#insert-minus", "E", "+/-");
  secondFunction("#comma", "F", ".");
  toggleProgramerOutput();
  disabledInputButton(slash);
  changeButtonColor(2, 0, 1);
});

const programerInput = document.querySelector("#programer-input");

// hide or show programer output
function toggleProgramerOutput() {
  if (slash.value === "A") {
    programerInput.hidden = false; // Show div element which contain bin, dec and hex element
    output.hidden = true;
    output.hidden = true;
    displayInput.hidden = true;
  } else {
    programerInput.hidden = true;
    output.hidden = false;
    displayInput.hidden = false;
  }
}

// Conversin from binary mode

function convertBinaryValue() {
  cleanScreen();
  changeButtonColor(1, 0, 2);
  buttonInput.forEach((element) => {
    // Disable all element without the if conditions
    if (
      element.value !== "0" &&
      element.value !== "1" &&
      element.value !== "AC" &&
      element.value !== "Function"
    )
      //element.setAttribute("disabled", "true");
      element.disabled = true;
  });
}

convertFromBinary = (values) => {
  if (buttonInput[4].disabled) {
    input += values;
    binaries.value = input;
    decimal.value = parseInt(input, 2); // convert binary value to decimal
    hexadecimal.value = parseInt(input, 2).toString(16); // convert binary value to hexadecimal
  }
};

// Conversin from decimal mode
function convertDecimalValue() {
  cleanScreen();
  disabledInputButton(buttonInput[4]);
  changeButtonColor(0, 1, 2);
  buttonInput.forEach((element) => {
    // Disable all  if conditions element
    if (
      element.value === "A" ||
      element.value === "B" ||
      element.value === "C" ||
      element.value === "D" ||
      element.value === "E" ||
      element.value === "F"
    )
      element.disabled = true;
  });
}

convertFromDecimal = (values) => {
  if (!buttonInput[4].disabled && slash.disabled) {
    input += values;
    decimal.value = input;
    binaries.value = (input - 0).toString(2); // convert decimal value to binary
    hexadecimal.value = (input - 0).toString(16); // convert decimal value to hexadecimal
  }
};

// Conversin from hexadecimal mode
function convertHexValue() {
  cleanScreen();
  disabledInputButton(slash);
  changeButtonColor(2, 0, 1);
}

convertFromHex = (values) => {
  if (!slash.disabled && slash.value === "A") {
    input += values;
    hexadecimal.value = input;
    binaries.value = parseInt(input, 16).toString(2); // convert hexadecimal value to binary
    decimal.value = parseInt(input, 16); // convert hexadecimal value to decimal
  }
};


/*LEON AKONDE*/