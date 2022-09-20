// Postagem de blog

function Postagem(titulo,mensagem,autor,vizualizacoes, comentarios,estarAovivo)
{
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.vizualizacoes = vizualizacoes
    this.comentarios = comentarios,
    this.estarAovivo = estarAovivo
}

const postagem = new Postagem("Titulo","Frase de efeito","Citendo","3",[{autor: "Felippe", mensagem : "e ai mano"},{autor: "Bruno", mensagem : "alou"}],false)