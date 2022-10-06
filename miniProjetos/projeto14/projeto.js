function Preco (tooltip,min,max)
{
    this.tooltip = tooltip,
    this.min = min,
    this.max = max
}

let array = [];
let valormin = 0;
let valormax = 0;

for (let i = 0; i <= 5;i++)
{
    if (i === 0)
    {
        valormax = 500;
        array[i] = new Preco("Valor até " + valormax, valormin, valormax);
    }
    else
    {
        valormax = (i + 1) * 500;
        array[i] = new Preco("Valor de " + valormin + " até " + valormax, valormin, valormax);
    }
    
    valormin = valormax;
}