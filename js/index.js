document.addEventListener("DOMContentLoaded", ()=>{
console.log("Carregamento da página.");

const sectionElements = document.querySelectorAll("section")

//CAPTURAR O VALUE DO INPUT E MANIPULAR A LÓGICA
let bloom_button = document.getElementsByName("search")[0]
bloom_button.addEventListener("click" , ()=>{

 let input_Year = document.querySelector("input").value

 if(input_Year.length == 0){
    console.log("Digite um ano para encontrar o desenho.");
 }
 else{
    //Usar a interpolação ${}
    let inputed = `year_${input_Year}`

    sectionElements.forEach(iten =>{
        
        let itenClass = iten.className

        if(itenClass == inputed){
            console.log(`itenClass: ${itenClass} inputed: ${inputed}`);
            //Desenhos pesquisados após a primeira pesquisa voltam a aparecer
            iten.style.display = 'flex'
            const titleDraw = iten.previousElementSibling
            titleDraw.style.display = 'block'
        }
        else{
            //Desenhos que não são do ano inputado desaparece
            iten.style.display = 'none'  
            //Captura o h3 que estiver perto dessas sections
            const titleDraw = iten.previousElementSibling
            titleDraw.style.display = 'none'           
        }
    })
 }
});//Botão de pesquisa

});//Carregamento da pág