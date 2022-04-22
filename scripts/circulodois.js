var progressBarTwo = buscarElemento(".circulo__progressespanhol"); 
var valueContainerTwo = buscarElemento(".value__circuloespanhol");

var progressValueTwo = 0; 
var progressEndValueTwo = 65; 
var speedTwo = 35; 


var progressTwo = setInterval(() => {
    progressValueTwo++; 
    // console.log(progressValueTwo);
    valueContainerTwo.textContent = `${progressValueTwo}%`;
    progressBarTwo.style.background = `conic-gradient(
        #4d5bf9 ${progressValueTwo * 3.6}deg, 
        #cadcff ${progressValueTwo * 3.6}deg
    )`;
    if(progressValueTwo == progressEndValueTwo){
        clearInterval(progressTwo); 
    }

    
}, speedTwo); 





