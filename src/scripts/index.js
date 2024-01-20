// function to display numbers
// get all buttons with id and classname
const numberButtons = document.querySelectorAll('#numbers.button, #operators.button, #bracket.button');
// iterate over each button and diplsy value 
numberButtons.forEach((button) => {
    button.addEventListener('click', function() {
        const display = document.getElementById('result');
        result.value += button.innerText;
    });
});

//function evaluator takes 3 paraments the result, function pass and the values passed
function evaluator(output, func, ...params) {
    const ans = func(...params)
    let res = document.getElementById(output)
    res.value = ans
}

//function to calculate pass an expression
function calculate(expression) {
    try {
        return eval(expression);
    }catch (error){
        return'Error';
    }
}

//function delete results one step to the right
function deleteResult(num) {
    if (num.length > 0) {
        return num.slice(0, -1);
    }
}

//  function to clear result on the screen
 function clearScreen(num) {
    return '';
 }

// function to calculate log 
function calculateLog(num) {
    return Math.log10(num);
}

// function to calculate square root 
function calculatesqrt(num) {
    return Math.sqrt(num);
}

// trigonometry functions
// function to calculate sin 
function calculateSin(num) {
    return  Math.sin(num);
}

// function to calculate cos 
function calculateCos(num) {
    return Math.cos(num);
}

// function to calculate Tan 
function calculateTan(num) {
    return Math.tan(num);
}

// function to calculate log 
function calculateLn(num) {
    return Math.log(num)    
}

//function to calculate power of a number
function calculatepow(num) {
    return Math.pow((num),2);
}

//function to calculate pi
 function calculatePi(num) {
    return (num) * Math.PI;
 }

 //function to calculate exponenent of a number
function calculateExponent(num) {
    return Math.exp(num);
}

//function to calculate radians
function calculateRadian(num) {
     return (num)*Math.PI / 180;
}

//function to calculate degree
function calculateDegree(num) {
   return (num)*180 / Math.PI;
}

//function to calculate fatorial
function calculateFactorial(num) {
    let number = 1;
    if (num === 0) {
        num = '1';
    } else if (num < 0) {
        num = NaN;
    } else {
        let number = 1;
        for (let i = num; i > 0; i--) {
            number *= i;
        }
        return number;
    }
}

const powButtons = document.querySelectorAll('#powerNumber.button');
// iterate over each button and diplsy value 
powButtons.forEach((button) => {
    button.addEventListener('click', function() {
        const display = document.getElementById('result');
        result.value += button.innerText="^";
    });
});

function baseToThePower(base, power){
    let prod = 1;
    for(i=0; i<power; i++){
        prod *= base; 
    }   
    return prod;
}

console.log(baseToThePower(2, 5));
function calculateIndice() {
    let result = document.getElementById("result");
    let parts=result.split("^");
    let base = eval(parts[0])
    let power = eval(parts[1]);
    result.value = baseToThePower(base, power);
}
