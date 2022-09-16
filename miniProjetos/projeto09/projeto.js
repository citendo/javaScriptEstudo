exibirAsteriscos(5);

function exibirAsteriscos(linhas)
{
    let padrao = '';
    let espaço = '';
    for ( let i = 1; i <= linhas; i++)
    {
        padrao += '*';
        for (let j = linhas-i; j >= 1; j--)
            espaço += ' ';
        console.log(espaço,padrao);
        espaço = '';
    }   
}