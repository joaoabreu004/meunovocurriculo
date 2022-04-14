let barraProgresso3  = document.querySelector(".barra-progresso__JS"); 
let valorObtido3 = document.querySelector(".valor__3"); 

let progressoValor3 = 0; 
let progressoValorFinal3 = 20; 
let velocidade3 = 20; 

let progresso3 = setInterval(() =>{
    progressoValor3++;
    console.log(progressoValor3);
    valorObtido3.textContent = `${progressoValor3}%`;

    if(progressoValor3 == progressoValorFinal3){
        clearInterval(progresso3); 
    }

}, velocidade3)
