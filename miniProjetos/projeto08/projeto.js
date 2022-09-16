const array = [90,90,90];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas)
{
    const media = calcularMedia(notas);

    if ((media >= 0) && (media <= 59)) // if (media <59)
        return 'F';

    if ((media >= 60) && (media <= 69)) // if (media < 69)
        return 'D';
        
    if ((media >=70) && (media <= 79)) // if (media < 79)
        return 'C';
            
    if ((media >= 80) && (media <= 89)) // if (media 89)
        return 'B';

    if ((media >= 90) && (media <= 100)) // return 'A'
        return 'A'
  
}

function calcularMedia(array)
{
    let soma = 0;
    for (let valor of array)
    {
        soma += valor;
    }
    return  soma / (array.length);
}