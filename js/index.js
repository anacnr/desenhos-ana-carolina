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
    console.log(`Valor do input: ${input_Year}`);
    let inputed = `year_${input_Year}`

    sectionElements.forEach(iten =>{
        
        let itenClass = iten.className

        if(itenClass == inputed){
            console.log(`itenClass: ${itenClass} inputed: ${inputed}`);
        }
        else{
            //Desenhos que não são do ano inputado desaparece
            iten.style.display = 'none'  
            //Capturar o h3 que estiver perto dessas sections
            const titleDraw = iten.previousElementSibling
            titleDraw.style.display = 'none'

            //A lógica está funcionando incialmente, porém após pesquisar pelo primeiro ano ao pesquisar novamente outro ano as sections perrmanecem desaparecidas.
        }
    })

 }
});//Botão de pesquisa

});//Carregamento da pág