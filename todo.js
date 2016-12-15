var input = document.getElementById("input");
var selector = document.getElementById("selector");
var display = document.getElementById("display");
var submit = document.getElementById("submit");

submit.addEventListener("click", function(){
    display.innerHTML += "<div>"+ input.value+"</div>";
    
    
});

display.addEventListener("click", function(evt){
    evt.target.parentNode.removeChild(evt.target);
})