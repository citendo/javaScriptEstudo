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

// ---------------- arrow functions 

const marcas = [
    {id: 1, nome:'a'},
    {id: 2, nome:'b'},
    {id: 3, nome:'c'}
];

// function normal : function (marca) {return marca.id === 1;}
const marca1 = marcas.find(marca =>  marca.id === 1); // arrow function
//nota: eu acho que só funciona quando você precisa passar uma função como parâmetro
//nota2: para usar só funciona no js6 e precisa ter nenhum ou n parâmetros (sim funciona com mais de 1, só vai ter que colocar os ())
//exemplo com nenhum:
//marcas.find(() =>  marca.id === 1);