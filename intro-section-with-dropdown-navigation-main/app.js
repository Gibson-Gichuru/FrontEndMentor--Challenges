// get elements from the dom

// menu 
const openMenu  = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

const overLay = document.querySelector(".overlay");
const menu  = document.querySelector(".nav--bar");

const features = document.getElementById("features");

const company = document.getElementById("company");

const featuresPop = document.getElementById("featuresPop");
const companyPop = document.getElementById("companyPop");
// events

openMenu.addEventListener("click", ()=>{
    // // 
    overLay.classList.add("open--overlay");
    menu.classList.add("open--menu");
})

closeMenu.addEventListener('click', ()=>{
    overLay.classList.remove("open--overlay")
    menu.classList.remove("open--menu");
})
// pop ups 

features.addEventListener("click", ()=>{
    featuresPop.classList.toggle("hide--popup")

    if(featuresPop.classList.contains("hide--popup")){


        document.querySelector("#features .arrow--up")
        .classList.add("hide--arrow")
    
        document.querySelector("#features .arrow--down")
        .classList.remove("hide--arrow")
    }
    else{
        document.querySelector("#features .arrow--up")
        .classList.remove("hide--arrow")
    
        document.querySelector("#features .arrow--down")
        .classList.add("hide--arrow")
    }
})

company.addEventListener("click", ()=>{
    companyPop.classList.toggle("hide--popup")

    if(featuresPop.classList.contains("hide--popup")){

        document.querySelector("#company .arrow--up")
        .classList.add("hide--arrow")
    
        document.querySelector("#company .arrow--down")
        .classList.remove("hide--arrow")
    }
    else{
        document.querySelector("#company .arrow--up")
        .classList.remove("hide--arrow")
    
        document.querySelector("#company .arrow--down")
        .classList.add("hide--arrow")
    }
})

