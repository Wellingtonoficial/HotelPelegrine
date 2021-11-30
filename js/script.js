
function scrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}

//home
document.getElementById('home').addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#row-1-home")
})

//servicos
document.getElementById('servicos').addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#row-3-servicos")
})

//fotos
document.getElementById('fotos').addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#sub-row2-fotos")
})

//contato
document.getElementById('contato').addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#footer-row-3")
})



// SLIDE DE SCROLL

let Scroll_Slider = document.getElementById("Scroll_Slider")
function setaEsquerda(){
    Scroll_Slider.scrollLeft += 200;
}
function setaDireita(){
    Scroll_Slider.scrollLeft += -200;
}



// MENU HAMBURGUER

let btn_checkbox = document.getElementById("btn_checkbox")
btn_checkbox.addEventListener('click', ()=>{
    
    let menu_ul = document.getElementById("menu_ul")

    menu_ul.classList.toggle("dropMenu")
})