let valorObtido = buscarElemento(".valor"); 

let progressoValor = 0; 
let progressoValorFinal = 95; 
let velocidade = 35; 

let progresso = setInterval(() =>{
    progressoValor++;
    valorObtido.textContent = `${progressoValor}%`;

    if(progressoValor == progressoValorFinal){
        clearInterval(progresso); 
    }

}, velocidade)
