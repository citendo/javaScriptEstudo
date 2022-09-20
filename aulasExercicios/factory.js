const celular = 
{
    marcaCelular : 'Asus',
    tamanhoTela : 
    {
        vertical : 155,
        horizontal : 75
    },
    capacidadeBateria: 5000,

    ligar : function()
    {
        console.log('Ligando...');
    }
}

// factory são basicamente funções que retornar objetos criados
function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria)
{
    return {
        marcaCelular : marcaCelular,
        tamanhoTela, // quando o parametro tem o mesmo nome da declaração , pode deixar só 1 nome, MAS SÓ QUANDO É CRIADO POR FACTORY, COMO CONSTRUTOR TEM QUE PASSAR O PARAMETRO
        capacidadeBateria,

        ligar()
        {
            console.log('Ligando...');
        }
    }
}

function criarTeclado(marcaTeclado,numeroTeclas,led,mecanico)
{
    return {
        marcaTeclado,
        numeroTeclas,
        led,
        mecanico,

        digitar()
        {
            console.log('Digitando....');
        }
    }
}

const teclado1 = criarTeclado('Logitech',42,true,'mecanico');

console.log(teclado1);

teclado1.digitar();

const celular1 = criarCelular('Asus',{vertical: 155, horizontal: 75},5000);

console.log(celular1);