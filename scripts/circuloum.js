var progressBar = buscarElemento(".circular__progress"); 
var valueContainer = buscarElemento(".value__circulo");

var progressValue = 0; 
var progressEndValue = 75; 
var speed = 35; 


var progress = setInterval(() => {
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





