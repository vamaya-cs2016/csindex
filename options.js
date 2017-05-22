var carpart = document.getElementById("carpart");
var part = document.getElementById("part");
var totalcost = document.getElementById("totalcost");
var addpart = document.getElementById("addpart");
//These are variables that are determine what is going to be put into the todo list, they are necessary to make the todo list work each variable is unique make sure that the name is different.
//Bellow there has been an event listener set up that makes the button work, it also tells the button to wrk when there is a click. 
addpart.addEventListener("click", function() {

    if (carpart.value === "Chevy 289") {
        var addpart = document.createElement("img");
            addpart.src = "http://ww1.prweb.com/prfiles/2013/01/23/10387934/gI_112267_turnkey-engines-for-sale.jpg"
                addpart.style.width = "300px"
                    part.appendChild(addpart);
    }
    else if (carpart.value === "Chevy 327") {
        var addpart = document.createElement("img");
            addpart.src = "https://static.summitracing.com/global/images/prod/xlarge/nal-19259918_at_xl.jpg"
                addpart.style.width = "300px"
                    part.appendChild(addpart);
    }
    else if (carpart.value === "Chevy 350") {
        var addpart = document.createElement("img");
            addpart.src = "http://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/performance/powertrain/engines/350-ho-turn-key/01-images/cp-2016-engine-detail-350-ho-tk-gallery-2to1-02.jpg?imwidth=1200"
                addpart.style.width = "300px"
                    part.appendChild(addpart);
    }
    else if (carpart.value === "Chevy 383 Stroker") {
        var addpart = document.createElement("img");
            addpart.src = "http://ww1.prweb.com/prfiles/2013/09/20/11145679/MLL-BP3830CTC1_w.jpg"
                addpart.style.width = "300px"
                    part.appendChild(addpart);
    }
    else if (carpart.value === "Chevy 396") {
        var addpart = document.createElement("img");
            addpart.src = "https://static.summitracing.com/global/images/prod/mediumlarge/mll-bp3961ctc_it_ml.jpg"
                addpart.style.width = "300px"
                    part.appendChild(addpart);
    }
    else if (carpart.value === "Chevy LS3") {
        var addpart = document.createElement("img");
            addpart.src = "http://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/performance/powertrain/engines/ls3/01-images/cp-2016-engine-detail-ls3-gallery-2to1-04.jpg?imwidth=1200"
                addpart.style.width = "300px"
                    part.appendChild(addpart);
    }
    else if (carpart.value === "Chevy LT1") {
        var addpart = document.createElement("img");
            addpart.src = "http://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/performance/powertrain/engines/lt1/01-images/cp-2016-engine-detail-lt1-gallery-2to1-01.jpg?imwidth=1200"
                addpart.style.width = "300px"
                    part.appendChild(addpart);
    }
    else if (carpart.value === "Chevy 427") {
        var addpart = document.createElement("img");
            addpart.src = "http://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/performance/powertrain/engines/zz427-480/01-images/cp-2016-engine-detail-zz427-480-image-gallery-03.jpg?imwidth=1200"
                addpart.style.width = "50px"
                    part.appendChild(addpart);
    }
    else if (carpart.value === "Chevy 454") {
        var addpart = document.createElement("img");
            addpart.src = "http://image.gmhightechperformance.com/f/gm-news/gm-performance-parts-crate-engines/10708021/454lsx-crate-engine.jpg"
                addpart.style.width = "300px"
                    part.appendChild(addpart);
    }
    else if (carpart.value === "Chevy 572") {
        var addpart = document.createElement("img");
            addpart.src = "http://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/performance/powertrain/engines/zz572-620-deluxe/01-images/cp-2016-engine-detail-image-gallery-2to1-01.jpg?imwidth=1200"
                addpart.style.width = "300px"
                    part.appendChild(addpart);
    }
    else if (carpart.value === "Chrysler 440") {
        var addpart = document.createElement("img");
            addpart.src = "http://static.speedwaymotors.com/RS/SR/Product/26/227BPC4931CTC_L_1e677a3e.jpg"
                addpart.style.width = "300px"
                    part.appendChild(addpart);
    }
});
//This event listener is a target that 
part.addEventListener("click", function(evt) {
    evt.target.parentNode.removeChild(evt.target);
});
