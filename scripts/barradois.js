let barraProgresso2  = document.querySelector(".barra-progresso__CSS"); 
let valorObtido2 = document.querySelector(".valor__2"); 

let progressoValor2 = 0; 
let progressoValorFinal2 = 80; 
let velocidade2 = 20; 

let progresso2 = setInterval(() =>{
    progressoValor2++;
    console.log(progressoValor2);
    valorObtido2.textContent = `${progressoValor2}%`;

    if(progressoValor2 == progressoValorFinal2){
        clearInterval(progresso2); 
    }

}, velocidade2)
