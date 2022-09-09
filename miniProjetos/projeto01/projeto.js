let a = 'vermelho';
let b = 'azul';

console.log(a);
console.log(b);

function trocarCor ()
{
    let aux = a;
    a = b;
    b = aux;
}
trocarCor()

console.log(a);
console.log(b);