class JogoDaMemoria {
    // se mandar um obj = {tela:1, idade: 2, etc: 3}
    // vai ignorar o resto das propriedades e pegar somente a propriedade
    // tela
    constructor ({tela}){
        this.tela = tela
        // caminho do arquivo, sempre relativo
        // ao index.html
        this.heroisIniciais = [
            {img: './arquivos/batman.png', name: 'batman'},
            {img: './arquivos/flash.png', name: 'flash'},
            {img: './arquivos/mulher-maravilha.png', name: 'mulher-maravilha'},
            {img: './arquivos/spiderman.png', name: 'spiderman'}
        ]
    }
    // para usar o this, não podemos usar satic
    inicializar() {
        // vai pegar todas as funcoes da classe tela
        // coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
    }
}   