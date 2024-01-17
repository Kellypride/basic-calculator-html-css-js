// function to display values on the screen
function display(value) {
    let result = document.getElementById("result");
    result.value += value;
 }

//  function to clear result on the screen
 function clearScreen() {
    let result = document.getElementById("result");
    result.value = '';
 }

function calculate() {
    let result = document.getElementById("result");
    try {
        result.value = eval(result.value);
    }catch (error){
        result.value = 'Error';
    }
}

// function to calculate log 
function calculateLog() {
     let result = document.getElementById("result");
     try {
        result.value = Math.log10(eval(result.value));
     }catch (error){
        result.value = 'Error';
    }
}

// function to calculate square root 
function calculatesqrt() {
    let result = document.getElementById("result");
    try {
        result.value = Math.sqrt(eval(result.value));
    }catch (error){
        result.value = 'error';
    }
}
// trigonometry functions
// function to calculate sin 
function calculateSin(sin) {
    let result = document.getElementById("result");
    try {
        result.value = Math.sin(eval(result.value));
    } catch (error) {
        result.value = 'Error';
    }
}

// function to calculate cos 
function calculateCos() {
    let result = document.getElementById("result");
    try {
        result.value = Math.cos(eval(result.value));
    } catch (error) {
        result.value = 'Error';
    }
}

// function to calculate Tan 
function calculateTan() {
    let result = document.getElementById("result");
    try {
        result.value = Math.tan(eval(result.value));
    } catch (error) {
        result.value = 'Error';
    }
}

//function to calculate power of a number
function calculatepow() {
    let result = document.getElementById("result");
    try {
        result.value = Math.pow(2,(eval(result.value)));
    } catch (error) {
        result.value = 'Error';
    }
}


