// variável usada apenas para pegar o nome do ID da DIV que será trabalhada
const ID_CONTEUDO = "conteudo" 
const ID_BTN_JOGAR = "jogar"
const ID_MENSAGEM = "mensagem"
const CLASSE_INVISIBLE = 'invisible'
const MENSAGENS = {
    sucesso: {
        texto: 'Combinação correta!',
        classe: 'alert-success'
    },
    erro: {
        texto: 'Combinação incorreta!',
        classe: 'alert-danger'
    }
}
// Classe destinada a tudo que será renderizado
class Tela {
    // essa funcão retorna uma DIV contendo a imagem e o nome do HEROI
    // informações parassadas pelo parametro ITEM
    static obterCodigoHtml(item) {
        return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
                <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
            </div>
            <br/>
        </div>
        `
    }
    static configurarBotaoConfigurarSelecao(funcaoOnClick){
        window.verificarSelecao = funcaoOnClick
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

    static configurarBotaoJogar(funcaoOnClick) {
        const btnJogar = document.getElementById(ID_BTN_JOGAR)
        btnJogar.onclick = funcaoOnClick
    }

    static exibirHerois(nomeDoHeroi, img) {
        const elementosHtml = document.getElementsByName(nomeDoHeroi)
        // para cada elemento encontrado na rela, vamos alterar a imagem
        // para a imagem inicial dele
        // com o forEach, para cada item, dentro dos () setamos o valor
        // de imagem
        elementosHtml.forEach(item => (item.src = img))
    }

    static exibirMensagem(sucesso = true) {
        const elemento = document.getElementById(ID_MENSAGEM)
        if(sucesso){
            elemento.classList.remove(MENSAGENS.erro.classe)
            elemento.classList.add(MENSAGENS.sucesso.classe)
            elemento.innerText = MENSAGENS.sucesso.texto
        }else{
            elemento.classList.remove(MENSAGENS.sucesso.classe)
            elemento.classList.add(MENSAGENS.erro.classe)
            elemento.innerText = MENSAGENS.erro.texto
        }
        elemento.classList.remove(CLASSE_INVISIBLE)
    }
}