let barraProgresso4  = document.querySelector(".barra-progresso__PHP"); 
let valorObtido4 = document.querySelector(".valor__4"); 

let progressoValor4 = 0; 
let progressoValorFinal4 = 10; 
let velocidade4 = 10; 

let progresso4 = setInterval(() =>{
    progressoValor4++;
    console.log(progressoValor4);
    valorObtido4.textContent = `${progressoValor4}%`;

    if(progressoValor4 == progressoValorFinal4){
        clearInterval(progresso4); 
    }

}, velocidade4)
