/*
    Arquivo MAIN
    será responsável por chamar,
    ler e agrupar  as informações dos outros arquivos
*/

function onLoad(){
    const dependencias = {
        tela: Tela // a classe Tela é global
    }
    // inicializamos o jogo da memória
    const jogoDaMemoria = new JogoDaMemoria(dependencias)
    jogoDaMemoria.inicializar()
}
window.onload = onLoad