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
    const velocidadeMaxima = 70;
    const kmPorPontto = 5
    if (velocidade <= velocidadeMaxima)
        console.log('Ok');
    else
    {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPontto));
        if ( pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('Pontos:', pontos);
    }
}