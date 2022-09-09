// //Operadores Aritiméticos (matemáticos)
// let salario = 100;
// // + , - , * , / , ** 

// console.log(salario + salario); //adição
// console.log(salario - salario); //subtração
// console.log(salario * salario); // multiplicação
// console.log(salario / salario); // divisão
// console.log(3 ** 2); //potência

// // ++ --

// let idade = 18;

// console.log (++idade); // se colocado na esquerda, vai mostrar o resultado com + 1,  na direita vai adicionar +1 depois de mostrar na tela
// console.log (--idade);

//Operasores de Atribuição

// let valorTecladoGamer = 100;
// valorTecladoGamer += valorTecladoGamer
// console.log(valorTecladoGamer);

//Operadores de Igualdade
//Igualdade estrita -- sempre usar essa maneira
// console.log(1 === 1); // true
// console.log('1' === 1); // false

//igualdade solta -- só comprar o valor, se o tipo for diferente vai converter
// console.log(1 == 1); // true
// console.log('1' == 1); // false

//Operador Ternário
// Tem um cliente, > 100 premium , se não comum
// let pontos = 200;
// let tipo = pontos > 100 ? 'Premium' : 'Comum';
// console.log(tipo);

//Operadores Lógicos
//AND &&
// console.log(true && true); // AND

// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho
// console.log(podeAplicar)

//OR ||

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho
console.log(podeAplicar)

// NOT !

let canditadoRecusado = !podeAplicar
console.log(canditadoRecusado)

//Comparadores não booleanos
//Falsy
//undefined, 0, null, false, '', Nan(Not a Number)

//truthy - são os ao contrário dos de cima

let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao

console.log(corPerfil)
