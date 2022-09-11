//minha solução
// const resultado = fizzBuzz(11);
// console.log(resultado);

// function fizzBuzz(entrada)
// {
//     if (typeof entrada == 'number')
//     {
//         if (entrada % 3 === 0)
//         {
//             if(entrada % 5 === 0)
//                 return 'BuzzFizz';
//             return 'Fizz';
//         }
//         else if (entrada % 5 === 0)
//             return 'Buzz';
//         return entrada;
//     }
//     return 'Não é um número'
// }

//talvez a melhor forma
const resultado = fizzBuzz(11);
console.log(resultado);

function fizzBuzz(entrada)
{
    if ( typeof entrada !== 'number')
        return 'Não é um número';
    if((entrada % 3 === 0)  && (entrada && 5 ===0))
        return 'fizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';

    return entrada;
}