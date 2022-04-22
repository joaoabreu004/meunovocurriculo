
let valorObtido2 = buscarElemento(".valor__2"); 

let progressoValor2 = 0; 
let progressoValorFinal2 = 90; 
let velocidade2 = 35; 

let progresso2 = setInterval(() =>{
    progressoValor2++;
    console.log(progressoValor2);
    valorObtido2.textContent = `${progressoValor2}%`;

    if(progressoValor2 == progressoValorFinal2){
        clearInterval(progresso2); 
    }

}, velocidade2)
