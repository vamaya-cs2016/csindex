var num1input = document.getElementById("num1");
var selector = document.getElementById("selector");
var num2input = document.getElementById("num2");
var calculate = document.getElementById("calculate");
var display = document.getElementById("display");
//Above it describes the variables that are neccesary for the javascript to work 
//The event listener bellow makes the calculate button function, and calculate with the "if" statements
calculate.addEventListener("click", function(){
    var num1 = num1input.value;
    var num2 = num2input.value;
//This simplifies the input value into more abriviated variables that can be written into the "if" statements 
    
//The following "if" statements are the various functions that the calculator will need in order to perform. 
//The selector value determines if they either do addition, subtraction, division, multiplication, the square root, or having number do the power of. 
    if(selector.value === "+"){
        var answera = +num1 + +num2;
        display.innerHTML = answera;
    }//This is addition
    else if(selector.value === "-"){
        var answerb = num1 - num2;
        display.innerHTML = answerb;
    }//This is subtraction
    else if(selector.value === "*"){
        var answerc = num1 * num2;
        display.innerHTML = answerc;
    }//This is multiplication
    else if(selector.value === "/"){
        var answerd = num1 / num2;
        display.innerHTML = answerd;
    }//This is division
    else if(selector.value === "^"){
        var answere = Math.pow(num1,num2);
        display.innerHTML = answere;
    }//This is to the power of 
    else if(selector.value === "√"){
        var answerf = Math.sqrt(num2);
        display.innerHTML = answerf;
    }//And this is the square root 
    
});