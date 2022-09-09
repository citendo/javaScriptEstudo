//If .... Else


// Se a hora estiver entre 06:00 até 12:00 : Bom dia!
// se estiver entre 12:00 até 18:00 : Boa tarde!
// caso contrário : Boa noite
// let hora = 22;

// if(hora > 6 && hora < 12)
// {
//     console.log('Bom Dia');
// }
// else if (hora > 12 && hora < 18)
// {
//     console.log('Boa Tarde');
// }
// else
// {
//     console.log('Boa Noite');
// }



// Switch ... case

let permissao = 'aa';// comum,gerente,diretor

switch(permissao)
{
    case 'comum':
        console.log('Usuário Comum');
        break;

    case 'gerente':
        console.log('Usuário Gerente');
        break;

    case 'diretor':
        console.log('Usuário Diretor');
        break;

    default:
        console.log('Usuário não reconhecido')

}