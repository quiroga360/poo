# POO

# Paradigmas de programação
IMPERATIVOS
Paradigmas: estrutural, procedural, orientado a objetos
- afirmação para alterar o estado de um programa
- foco em 'como', passo a passo

function dobra(vetor){
    let resultados = [];
    for (let i = 0; i < vetor.length ; i++){
        resultados.push(arr[i] * 2);
}
return resultados;
}

DECLARATIVOS
Paradigma: funcional
- expressar a lógica sem descrever o controle de fluxo
- foco em 'o que'

function dobra(vetor){
return vetor.map((item) => item * 2);
}