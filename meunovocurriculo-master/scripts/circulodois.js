let progressBarTwo = document.querySelector(".circulo__progressespanhol"); 
let valueContainerTwo = document.querySelector(".value__circuloespanhol");

let progressValueTwo = 0; 
let progressEndValueTwo = 65; 
let speedTwo = 10; 


let progressTwo = setInterval(() => {
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





