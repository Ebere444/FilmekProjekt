const gomb = document.getElementById("button");
const filmcim = document.getElementById("film");
const filmufaj = document.getElementById("mufaj");
const filmurl = document.getElementById("url");
const kartyahely = document.getElementById("kartyahelye")

gomb.addEventListener("click", function() {

    if (filmcim.value === "" || filmurl === "") {
       alert("Töltse ki a kmezőket!");
       return
    }


    const kartya = document.createElement("section");
    const div = document.createElement("div");
    const cimh3 = document.createElement("h3");
    const mufajP = document.createElement("p");
    const kep = document.createElement("img");

    
    kartya.classList.add("row"); //Bootstrap formázás
    div.classList.add("card", "col-md-6", "border-2","border-warning", "my-3", "p-3", "shadow" );
    cimh3.classList.add("text-center");
    mufajP.classList.add("text-center", "fw-bold");
    kep.classList.add("img-fluid");

    

    const torol = document.createElement("button"); 
    torol.classList.add("btn","btn-warning", "my-2"); //Bootstrap formázás
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