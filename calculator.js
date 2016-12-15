var num1input = document.getElementById("num1");
var selector = document.getElementById("selector");
var num2input = document.getElementById("num2");
var calculate = document.getElementById("calculate");
var display = document.getElementById("display");

calculate.addEventListener("click", function(){
    var num1 = num1input.value;
    var num2 = num2input.value;
    
    
    
    if(selector.value === "+"){
        var answera = +num1 + +num2;
        display.innerHTML = answera;
    }
    else if(selector.value === "-"){
        var answerb = num1 - num2;
        display.innerHTML = answerb;
    }
    else if(selector.value === "*"){
        var answerc = num1 * num2;
        display.innerHTML = answerc;
    }
    else if(selector.value === "/"){
        var answerd = num1 / num2;
        display.innerHTML = answerd;
    }
    else if(selector.value === "^"){
        var answere = Math.pow(num1,num2);
        display.innerHTML = answere;
    }
    else if(selector.value === "√"){
        var answerf = Math.sqrt(num2);
        display.innerHTML = answerf;
    }
    
});