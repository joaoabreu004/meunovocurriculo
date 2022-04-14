let progressBar = document.querySelector(".circular__progress"); 
let valueContainer = document.querySelector(".value__circulo");

let progressValue = 0; 
let progressEndValue = 75; 
let speed = 20; 


let progress = setInterval(() => {
    progressValue++; 
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        #4d5bf9 ${progressValue * 3.6}deg, 
        #cadcff ${progressValue * 3.6}deg
    )`;
    if(progressValue == progressEndValue){
        clearInterval(progress); 
    }

    
}, speed); 





