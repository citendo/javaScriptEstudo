// ---------------- arrays

//let familia = [26,45,50,17];
let  array = [true,50,'Enzo',30];


// console.log(array);
// console.log(array[2]);
// console.log(array.length);

let ex = ['Felippe', 22, 'Angra dos reis'];
// console.log(ex);

// ---------------- add novos elementos

const numeros = [1,2,3,4];

//inicio

numeros.unshift(0);
//console.log(numeros); // nota, mesmo a variável sendo uma constante, pode alterar o array atráves do metodos do array

//meio

numeros.splice(1,0,'a'); // primeira posição: vai ser o indice que ele vai entrar (lembrando que começa no zero) | 
                         // segunda posição : quanto indices após(considerando o indice anterior) ele vai deletar | 
                         // terceira posição : valor de fato que vai ser inserido.
//console.log(numeros);
numeros.splice(1,5,'b'); // exemplo da  segunda posição
//console.log(numeros);

//fim

numeros.push(1);
//console.log(numeros);

// ---------------- encontrar elementos

// Primitivos

const numeros2 = [1,2,3,4,1];

//console.log(numeros2.indexOf(2)); // retorna o indice do valor
//console.log(numeros2.indexOf(5)); // retorna -1 por que não está no array
//console.log(numeros2.indexOf('1')); // retorna -1 pq ele tbm olha o tipo da varivavel, nesse caso string, e não tem string no array com 1


//console.log(numeros2.lastIndexOf(1)); // vai retorna o indice da ultima ocorrecia do valor repetido

//console.log(numeros2.indexOf(2) !== -1); // vai ser true, é um exemplo que você pode usar a busca para operações lógicas
//console.log(numeros2.includes(2)); //retorna boolean, só é usado em js 6

// Referência 

const marcas = [
    {id: 1, nome:'a'},
    {id: 2, nome:'b'},
    {id: 3, nome:'c'}
];


const marca1 = marcas.find(function (marca) {return marca.id === 1;});

//console.log (marca1);

// explicação para mim mesmo que essa é difícl:
// para encontrar um objeto dentro de um array usamos a funcionalidade find... onde passamos uma função com um parâmetro... 
// ...nela retornamos a condição de busca do objeto (exemplo quero o id = 1)
// se não encontrar, retorna undefied

// ---------------- remover elementos

const numeros3 = [1,2,3,4,5,6];

//fim
const ultimo = numeros3.pop();
// console.log(ultimo);
// console.log(numeros3);

//inicio
const inicio = numeros3.shift();
// console.log(inicio);
// console.log(numeros3);

//meio
const meio = numeros3.splice(3,1);
// console.log(meio);
// console.log(numeros3);

// ---------------- esvaziar um array

let numeros4 = [1,2,3,4,5,6];
let outros = numeros4;
// solução 1

//numeros4 = []; // tem que ser numa vavíavel let
// console.log(numeros4)
// console.log(outros) // esse array ai vai ter os valores, por que eu mudei a referencia do array de cima mas não desse

// Solução 2
// numeros4.length = 0;
// console.log(numeros4)
// console.log(outros) // os 2 vão estar vazio, por que eu zerei o array para onde os 2 apontam

// Solução 3

// numeros4.splice(0,numeros4.length);
// console.log(numeros4)
// console.log(outros) // os 2 tbm ficam vazio

// Solução 4

// while (numeros4.length > 0)
//     numeros.pop()

// melhor soluçãop para ezvaziar um vetor é a 2


// ---------------- combinar arrays

const primeiro = [1,2,3];
const segundo = [4,5,6];

const combinado = primeiro.concat(segundo);
const combinado2 = [...primeiro,"a",...segundo,"b"]; // Operador spread. Só pode ser usado no JS6. Permite alterações durante a concatenação
// console.log(combinado);
// console.log(combinado2);

// ---------------- dividir arrays

const cortado = combinado.slice(1,3); // vai do indice inicial até o indice final -1
const cortado2 = combinado.slice(1); //vai do indice inicial até o final do array
const cortado3 = combinado.slice(); // "copia o array" //Quando usado num array de objetos, ele copia a referencia do objeto
// console.log(cortado)
// console.log(cortado2)
// console.log(cortado3)

//foreach

const numeros5 = [1,2,3,4,5];

// numeros5.forEach(function (numero) {
//     console.log(numero)
// })

const objetos = [
                {id: 1, nome:'a'},
                {id: 2, nome:'b'},
                {id: 3, nome:'c'}];

// objetos.forEach((objeto,indice) => console.log(objeto,indice))


// ---------------- Combinando array's de novo

const numeros6 = [1,2,3,4,5,6];

const combinado3 = numeros6.join('.'); // pega todos os valores e coloca um separador a sua escolha ex : [1,2,3] vira 1.2.3
console.log(combinado3);

const frase = 'Ola bem vindo ao curso';
const resultado = frase.split(' '); // dividi uma frase pelo separador a escolha ex: 'bem vindo' vira ['bem','vindo']
console.log(resultado);

console.log(resultado.join('-'));   // Slug ex : bem-vindo-ao-curso
