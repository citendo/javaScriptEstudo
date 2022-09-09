// Verbo + Substantivo
//resetaCor
//transformarObjeto
//alterarTamanho

let corSite = "azul";
let numero = 7;

function resetaCor(cor, tonalidade){
    corSite = cor + " " + tonalidade;
}

console.log(corSite);
resetaCor("vermelho"," escuro");
console.log(corSite);

function adicionaUm (){
    numero += 1;
}

console.log(numero);
adicionaUm();
console.log(numero);

//Tipos de funções
//tipo 1 = realiza uma tarefa, não devolve nada
function dizerNome (){
    console.log("Enzo")
}
dizerNome();

//tipo 2 = realiza uma tarefa e retorna alguma coisa

function dobro(valor){
    return valor * 2
}

let valor = dobro(30);
console.log(valor);