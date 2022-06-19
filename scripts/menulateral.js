// FUNÇÃO PARA BUSCAR ELEMENTO (FUNÇÃO GLOBAL)
function buscarElemento(seletor){
    return document.querySelector(seletor); 
}

// FUNÇÕES PARA ESSA RESPONSABILIDADE (CARD LATERAL)

function eliminarElementoCss(variavel, elementoQueVaiSair){
    return variavel.classList.remove(elementoQueVaiSair); 
} 

function adicionarElementoCss(variavel, elementoAdicionado){
    return variavel.classList.add(elementoAdicionado);
}
// ===========================================================

const informacoes = buscarElemento('.card__lateral'); 
const deslocTextos = buscarElemento('.textos'); 
const botaoAbrir = buscarElemento('.btnabrirmenu');
const botaoFechar = buscarElemento('.btnclose');


botaoFechar.addEventListener('click', () => {
    eliminarElementoCss(informacoes, 'card__lateral--ativo'); 
    eliminarElementoCss(deslocTextos, 'textos--cardAberto');
})

botaoAbrir.addEventListener('click', () => {
    adicionarElementoCss(informacoes, 'card__lateral--ativo');
    adicionarElementoCss(deslocTextos, 'textos--cardAberto');
})


