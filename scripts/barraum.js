let barraProgresso  = document.querySelector(".barra-progresso"); 
let valorObtido = document.querySelector(".valor"); 

let progressoValor = 0; 
let progressoValorFinal = 70; 
let velocidade = 10; 

let progresso = setInterval(() =>{
    progressoValor++;
    valorObtido.textContent = `${progressoValor}%`;

    if(progressoValor == progressoValorFinal){
        clearInterval(progresso); 
    }

}, velocidade)
