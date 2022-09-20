function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria)
{
    return {
        marcaCelular,
        tamanhoTela, 
        capacidadeBateria,
        ligar()
        {
            console.log("Ligando...");
        }
    }
}

function Celular(marcaCelular,tamanhoTela,capacidadeBateria)
{
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log("Ligando...");
    }
}

const celular = new Celular('Asus',5.5,5000)
console.log(celular)

celular.ligar();


function Mouse(marca,dpi,led)
{
    this.marca = marca,
    this.dpi = dpi,
    this.led = led,
    this.click = function()
    {
        console.log("Clicando...")
    }
}

const mouse = new Mouse('Logitech',24000,true);
console.log(mouse);
mouse.click();
