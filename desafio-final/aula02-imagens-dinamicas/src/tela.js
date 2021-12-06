// variável usada apenas para pegar o nome do ID da DIV que será trabalahda
const ID_CONTEUDO = "conteudo" 
// Classe destinada a tudo que será renderizado
class Tela {
    // essa funcão retorna uma DIV contendo a imagem e o nome do HEROI
    // informações parassadas pelo parametro ITEM
    static obterCodigoHtml(item) {
        return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;">
                <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
            </div>
            <br/>
        </div>
        `
    }
    // essa funcão é responsável por pegar a DIV e alterar seu contéudo
    // no caso pegar as imagens
    static alterarConteudoHtml(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }
    // essa função é responsável por gerar um array de strings, contendo todas as informações das imgens
    // caminho (src) e nome 
    // Após pegar as informações retorna tudo em uma String
    static gerarStringHTMLpelaImagem(itens){
        // para cada item da lista, vai executar a função obterCodigoHTML
        // ao final, vai concatenar tudo em uma única string
        // muda de Array para String
        return itens.map(Tela.obterCodigoHtml).join('')
    }
    // função responsável por pegar o array contendo as informações do heroi
    static atualizarImagens(itens) {
        // transforme o array passado por parâmetro em String
        const codigoHtml = Tela.gerarStringHTMLpelaImagem(itens)
        // altera o conteúdo da DIV
        Tela.alterarConteudoHtml(codigoHtml)
    }
}