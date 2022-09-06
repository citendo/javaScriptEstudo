// maneiras de declarar uma variavel
// let idade = 5;
// console.log(idade);
// let altura = 180;
// console.log(altura);
// var altura = 5;

//ex 1 - declaração de váriaveis
// let nome = 'enzo', idade = 22, altura = 180;
// console.log(nome);
// console.log(idade);
// console.log(altura);

//Constante
// const valorIgressoAdulto = 20;
//valorIgressoAdulto = 30;
//não pode alterar o valor de uma variavel constante
//Boas praticas é usar o const e usar o let só quando precisar ficar alterando valor
// console.log(valorIgressoAdulto);

//Existem 2 tipos primitivos 
//Referencia e valores
// valores = String, Number, Boolean, Undefined, Know
// referencia = object , arrays, functions 
let nome = 'Rafael  asq12 !@!#'; // String literal
let idade = 23; //number literal 
let estaAprovado = true; // Boolean
let sobrenome ; //Undefined
let corSelecionado = null //redefinir um valor "Know"

let pessoa = {
    nome: 'Enzo',
    idade: 23,
    estaAprovado: true,
    sobrenome: 'Gabriel'
};

let computador = {
    pastas : 10,
    acessoAInternet : "Sim",
    funcionamento : true
};

console.log(computador)
