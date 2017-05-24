var carpart = document.getElementById("carpart");
var part = document.getElementById("part");
var totalprice = document.getElementById("totalprice")
var addpart = document.getElementById("addpart");
var costnum = 0
//These are variables that are determine what is going to be put into the todo list, they are necessary to make the todo list work each variable is unique make sure that the name is different.
//Bellow there has been an event listener set up that makes the button work, it also tells the button to wrk when there is a click. 
addpart.addEventListener("click", function() {
    var priceA = 5462
    var priceB = 6598
    var priceC = 7763
    var priceD = 6229
    var priceE = 8188
    var priceF = 11385
    var priceG = 13278
    var priceH = 10787
    var priceI = 13088
    var priceJ = 18396

    if (carpart.value === "Chevy 327") {
        var addpart = document.createElement("img");
            addpart.src = "Screenshot 2017-05-23 at 11.23.02 AM.jpg"
                addpart.style.width = "300px"
                    part.appendChild(addpart);
                    costnum = +totalprice.innerHTML + +priceA;
                    totalprice.innerHTML = costnum;
    }
    else if (carpart.value === "Chevy 350") {
        var addpart = document.createElement("img");
            addpart.src = "Screenshot 2017-05-23 at 11.23.18 AM.jpg"
                addpart.style.width = "300px"
                    part.appendChild(addpart);
                    costnum = +totalprice.innerHTML + +priceB;
                    totalprice.innerHTML = costnum;
    }
    else if (carpart.value === "Chevy 383 Stroker") {
        var addpart = document.createElement("img");
            addpart.src = "Screenshot 2017-05-23 at 11.23.30 AM.jpg"
                addpart.style.width = "300px"
                    part.appendChild(addpart);
                    costnum = +totalprice.innerHTML + +priceC;
                    totalprice.innerHTML = costnum;
    }
    else if (carpart.value === "Chevy 396") {
        var addpart = document.createElement("img");
            addpart.src = "Screenshot 2017-05-23 at 11.23.42 AM.jpg"
                addpart.style.width = "300px"
                    part.appendChild(addpart);
                    costnum = +totalprice.innerHTML + +priceD;
                    totalprice.innerHTML = costnum;
    }
    else if (carpart.value === "Chevy LS3") {
        var addpart = document.createElement("img");
            addpart.src = "Screenshot 2017-05-23 at 11.23.54 AM.jpg"
                addpart.style.width = "300px"
                    part.appendChild(addpart);
                    costnum = +totalprice.innerHTML + +priceE;
                    totalprice.innerHTML = costnum;
    }
    else if (carpart.value === "Chevy LT1") {
        var addpart = document.createElement("img");
            addpart.src = "Screenshot 2017-05-23 at 11.24.04 AM.jpg"
                addpart.style.width = "300px"
                    part.appendChild(addpart);
                    costnum = +totalprice.innerHTML + +priceF;
                    totalprice.innerHTML = costnum;
    }
    else if (carpart.value === "Chevy 427") {
        var addpart = document.createElement("img");
            addpart.src = "Screenshot 2017-05-23 at 11.24.14 AM.jpg"
                addpart.style.width = "50px"
                    part.appendChild(addpart);
                    costnum = +totalprice.innerHTML + +priceG;
                    totalprice.innerHTML = costnum;
    }
    else if (carpart.value === "Chevy 454") {
        var addpart = document.createElement("img");
            addpart.src = "Screenshot 2017-05-23 at 11.24.34 AM.jpg"
                addpart.style.width = "300px"
                    part.appendChild(addpart);
                    costnum = +totalprice.innerHTML + +priceH;
                    totalprice.innerHTML = costnum;
    }
    else if (carpart.value === "Chevy 572") {
        var addpart = document.createElement("img");
            addpart.src = "Screenshot 2017-05-23 at 11.24.45 AM.jpg"
                addpart.style.width = "300px"
                    part.appendChild(addpart);
                    costnum = +totalprice.innerHTML + +priceI;
                    totalprice.innerHTML = costnum;
    }
    else if (carpart.value === "Chrysler 440") {
        var addpart = document.createElement("img");
            addpart.src = "Screenshot 2017-05-23 at 11.24.24 AM.jpg"
                addpart.style.width = "300px"
                    part.appendChild(addpart);
                    costnum = +totalprice.innerHTML + +priceJ;
                    totalprice.innerHTML = costnum;
    }
});
//This event listener is a target that 
part.addEventListener("click", function(evt) {
                    evt.target.parentNode.removeChild(evt.target);
                            

    
});
totalprice.addEventListener("click", function(evt) {
                        evt.target.parentNode.removeChild(evt.target);
                            costnum = +totalprice.innerHTML - priceA;
                            totalprice.innerHTML = costnum;
                    
    var costnum = 0
    var priceA = 5462
    var priceB = 6598
    var priceC = 7763
    var priceD = 6229
    var priceE = 8188
    var priceF = 11385
    var priceG = 13278
    var priceH = 10787
    var priceI = 13088
    var priceJ = 18396
    
});