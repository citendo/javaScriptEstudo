function Endereco(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
} // aqui vai um aviso para o futuro, quando criar um objeto do tipo construtor, passar os parametro para o objeto, por que se não o objeto fica indefied

const endereco1 = new Endereco('a','b','c');
const endereco2 = new Endereco('a','b','c');

function saoIguais(endereco1,endereco2)
{
    //comparar se as propriedades são a mesma
    return endereco1.rua === endereco2.rua &&
        endereco1.cidade === endereco2.cidade &&
        endereco1.cep    === endereco2.cep;
}

console.log(saoIguais(endereco1,endereco2))

function temEnderecoMemoriaIguais(endereco1,endereco2)
{   //comparar se a referência do objeto aponta para o mesmo local da memória
    return endereco1 === endereco2; // apontam para endereço de memórias diferentes
}

console.log(temEnderecoMemoriaIguais(endereco1,endereco2)); // vai ser false pq aponta para endereços diferentes

const endereco3 = endereco1;

console.log(temEnderecoMemoriaIguais(endereco1,endereco3)) // vai ser igual, por que quando eu defini o endereco3 eu passei como referencia o endereco1, então eles vão apontar para o mesmo endereço na memória

function propriedadesIguais (endereco1, endereco2)
{
    if (!saoIguais(endereco1,endereco2))
        return "Não tem propriedades Iguais";
    for (let chave in endereco1)
    {
        if (endereco1[chave] === endereco2[chave])
            console.log("a chave " + chave + " dos endereços são iguais")
        else
            console.log("a chave " + chave + " dos endereços não são iguais")
    }
}

propriedadesIguais(endereco1,endereco2);