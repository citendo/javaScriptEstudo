// Obejto Endereço

// Criar um Objeto endereço que contem:
// Rua
// Cidade
// CEP
// função exibirEndereço()

function Endereco (rua,cidade,cep)
{
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
    this.exibirEndereco = function ()
    {
        console.log (this.rua + ", " + this.cidade + ", " + this.cep)
    }
}

const casa = new Endereco ("Jardim dos hibisco","Ribeirão Preto", "14022-310")
casa.exibirEndereco();