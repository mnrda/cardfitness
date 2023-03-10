

const cdiv11 = document.getElementById("div11");
const cdiv12 = document.getElementById("div12");
const cdiv21 = document.getElementById("div21");
const cdiv22 = document.getElementById("div22");
const cdiv3 = document.getElementById("div3");
const cbtnprev = document.getElementById("btnprev");

cdiv11.onclick = function(){
    cbtnprev.style.display= "block";
    cbtnprev.style.textAlign="center";
    cbtnprev.style.margin="auto";

    cdiv11.style.display = "none";
    cdiv12.style.display = "none";


    cdiv21.style.display = "block";
    cdiv22.style.display = "block";
    cdiv3.style.display = "none";

}

cdiv12.onclick = function(){

    cbtnprev.style.display= "block";
    cbtnprev.style.textAlign="center";
    cbtnprev.style.margin="auto";

    cdiv11.style.display = "none";
    cdiv12.style.display = "none";


    cdiv21.style.display = "none";
    cdiv22.style.display = "none";
    cdiv3.style.display = "block";

}

cbtnprev.onclick = function(){
    cdiv11.style.display = "block";
    cdiv12.style.display = "block";


    cdiv21.style.display = "none";
    cdiv22.style.display = "none";
    cdiv3.style.display = "none";

}