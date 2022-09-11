// minha solução (meio questionável mas funciona)
// verificadorVelocidade(130);

// function verificadorVelocidade(velocidade)
// {
//     if(velocidade <= 70)
//         console.log('ok');
//     else
//     {
//         const pontos = Math.floor((velocidade / 5)) - 14;

//         if(pontos >= 12)
//             console.log('Carteira suspensa');
//         else
//             console.log('Pontos:',pontos);
//     }' '
// }

verificarVelocidade(85);

function verificarVelocidade(velocidade)
{
    if (velocidade <= 70)
        console.log('Ok');
    else
    {
        const pontos = Math.floor(((velocidade- 70) / 5));
        if ( pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('Pontos:', pontos);
    }
}