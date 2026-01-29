const gomb = document.getElementById("button");
const filmcim = document.getElementById("film");
const filmufaj = document.getElementById("mufaj");
const filmurl = document.getElementById("url");
const kartyahely = document.getElementById("kartyahelye")

gomb.addEventListener("click", function() {
    const kartya = document.createElement("section");
    const div = document.createElement("div");
    const cimh3 = document.createElement("h3");
    const mufajP = document.createElement("p");
    const kep = document.createElement("img");

    kartya.classList.add("row"); //Bootstrap formázás
    div.classList.add("col-md-4", "border", "border-2", "rounded" , "my-2");
    cimh3.classList.add("text-center");
    mufajP.classList.add("text-center", "fw-bold");
    kep.classList.add("img-fluid", "mx-auto", "my-2", "d-block", "img-rounded");

    const torol = document.createElement("button");
    torol.classList.add("btn","btn-danger", "my-2"); //Bootstrap formázás
    torol.textContent = "TÖRÖL";


    torol.addEventListener("click", function(){
        kartya.remove();
    })

    cimh3.innerText = filmcim.value ;
    mufajP.innerText = filmufaj.value ;
    kep.src = filmurl.value;

    
    div.append(cimh3);
    div.append(mufajP);
    div.append(kep);
    div.append(torol);
    kartya.append(div);
    kartyahely.append(kartya);
    

    filmcim.value = "";
    filmufaj.value = "Akcio";
    filmurl.value = "";

})