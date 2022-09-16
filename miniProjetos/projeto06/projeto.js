//melhor solução (e minha tbm)
const filme = {
    titulo : 'Vingadores',
    ano : 2018,
    diretor : 'Robin',
    personagem : 'Thor'
}

exibirPropriedades(filme);
function exibirPropriedades(obj)
{
    for ( propriedades in obj)
    {
        if (typeof obj[propriedades] === 'string')
            console.log(propriedades, obj[propriedades])
    }
}