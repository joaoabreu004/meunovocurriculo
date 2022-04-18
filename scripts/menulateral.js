const botaoFechar = document.querySelector('.btnclose'); 
const informacoes = document.querySelector('.card__lateral'); 
var deslocTextos = document.querySelector('.textos'); 

botaoFechar.addEventListener('click', () => {
    informacoes.classList.remove('card__lateral--ativo'); 
    deslocTextos.classList.remove('textos--cardAberto')
})

const botaoAbrir = document.querySelector('.btnabrirmenu')
botaoAbrir.addEventListener('click', () => {
    informacoes.classList.toggle('card__lateral--ativo');
    deslocTextos.classList.add('textos--cardAberto');
})
