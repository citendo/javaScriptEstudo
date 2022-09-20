const celular = 
{
    marcaCelular : 'motorola',
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

const novoObjeto = Object.assign({ internet5G : true},celular); // comando parar copiar um objeto

console.log(novoObjeto);

const objeto2 = {...celular};//outra forma de clonar um objeto

console.log(objeto2);