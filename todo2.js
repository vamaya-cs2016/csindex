var usrTask = document.getElementById("usrTask");
var textstyle = document.getElementById("textstyle");
var display = document.getElementById("display");
var submitBtn = document.getElementById("submitBtn");
//These are variables that are determine what is going to be put into the todo list, they are necessary to make the todo list work each variable is unique make sure that the name is different.
//Bellow there has been an event listener set up that makes the button work, it also tells the button to wrk when there is a click. 
submitBtn.addEventListener("click", function(){

   var newTask = usrTask.value;
   
   if (textstyle.value === "none") {
       display.innerHTML += "<div>" + newTask + "</div>";
   }
    else if(textstyle.value === "red"){
        display.innerHTML += '<div style="color: red;">' + newTask + '</div>';
    }
    else if(textstyle.value ==="bold"){
        display.innerHTML += '<div style="font: bold 20px/30px Times New Roman, serif;">' +newTask+ '</div>';
    }
    else if(textstyle.value ==="underline"){
        display.innerHTML += '<div style="text-decoration: underline;">' +newTask+ '</div>';
    }
    else if(textstyle.value ==="italics"){
        display.innerHTML += '<div style="font: italic 15px/30px Times New Roman, serif;">' +newTask+ '</div>';
    }
});
//This event listener is a target that 
display.addEventListener("click", function(evt){
    evt.target.parentNode.removeChild(evt.target);
});