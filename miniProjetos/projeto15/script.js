function listaConvidados ()
{
    let convidado = document.getElementById("convidado").value;
    let convidou = document.getElementById("convidou").value;

    if(convidou !== "citendo")
        return document.getElementById("pesquisa").innerText = "Você não pode entrar";
    
    const lista = ["Bueno","Felippe","Luluzao","Fera","Rh","Lu"]

    if(lista.includes(convidado))
        return document.getElementById("pesquisa").innerText = "Você pode entrar";
    
    return document.getElementById("pesquisa").innerText = "Você não pode entrar";
}