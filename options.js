var carpart = document.getElementById("carpart");
var display = document.getElementById("display");
var totalcost = document.getElementById("totalcost");
var addpart = document.getElementById("addpart");
//These are variables that are determine what is going to be put into the todo list, they are necessary to make the todo list work each variable is unique make sure that the name is different.
//Bellow there has been an event listener set up that makes the button work, it also tells the button to wrk when there is a click. 
addpart.addEventListener("click", function(){

   
   if (carpart.value === "none") {
       display.innerHTML += "<div>" +  + "</div>";
   }
    else if(carpart.value === "red"){
        display.innerHTML += '<div style="color: red;">' +  + '</div>';
    }
    else if(carpart.value ==="bold"){
        display.innerHTML += '<div style="font: bold 20px/30px Times New Roman, serif;">' +  + '</div>';
    }
    else if(carpart.value ==="underline"){
        display.innerHTML += '<div style="text-decoration: underline;">' +  + '</div>';
    }
    else if(carpart.value ==="italics"){
        display.innerHTML += '<div style="font: italic 15px/30px Times New Roman, serif;">' +  + '</div>';
    }
});
//This event listener is a target that 
display.addEventListener("click", function(evt){
    evt.target.parentNode.removeChild(evt.target);
});