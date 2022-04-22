
let valorObtido3 = buscarElemento(".valor__3"); 

let progressoValor3 = 0; 
let progressoValorFinal3 = 20; 
let velocidade3 = 35; 

let progresso3 = setInterval(() =>{
    progressoValor3++;
    console.log(progressoValor3);
    valorObtido3.textContent = `${progressoValor3}%`;

    if(progressoValor3 == progressoValorFinal3){
        clearInterval(progresso3); 
    }

}, velocidade3)
