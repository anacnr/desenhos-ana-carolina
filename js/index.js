document.addEventListener("DOMContentLoaded", ()=>{
console.log("carregado");

const sectionElements = document.querySelectorAll("section")

//CAPTURAR O VALUE DO INPUT E MANIPULAR A LÓGICA

sectionElements.forEach(iten => {
let itenClass = iten.className

if(itenClass == "year_2022"){
    //console.log("Desenhos de 2022");
}
else{
    //Classe que não é de 2022 desaparece
    iten.style.display = 'none'  
    //Capturar o h3 que estiver perto dessas sections
    const titleDraw = iten.previousElementSibling
    titleDraw.style.display = 'none'
}
});

});//Carregamento da pág