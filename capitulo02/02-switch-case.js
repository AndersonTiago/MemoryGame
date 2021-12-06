// classo Node utilizada para capturar os eventos que usuário está fazendo
const readLine = require('readline')
const terminal = readLine.createInterface({
    // definir o modo de entrada via terminal
    input: process.stdin,
    // todo texto
    output: process.stdout
})

// texto do menu

const textoMenu = `
    Olá, seja bem vindo ao sistema de media
    Digite 1 para acessar o menu inicial
    Digite 2 para acessar o menu de Heróis
    Digite 3 para acessar o menu de Guerreiras
    Digite 0 para sair
`
// console.log('textoMenu', textoMenu)
// const opcao = 3
// switch(opcao){
//     case 1:
//         console.log('pressionou 1')
//         break;
//     case 2:
//         console.log('pressionou 2')
//         break;
//     default:
//         console.log('opção inválida')
//         break
// }

// terminal.question('Qual é seu nome? ', (msg) =>{
//     console.log('Você escreveu', msg)
//     terminal.close()
// })

const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial
    },
    opcao1: {
        texto: 'subenu! Pressione enter para selecionar mais opções...',
        fn: opcao1
    }
}

function opcao1(msg){
    console.log('Não há mais opções!')
    terminal.close()
}

function menuInicial(msg){
    const opcao = Number(msg)
    if(isNaN(opcao)){
        throw new Error('Não é um número', msg)
    }

    switch(opcao){
        case 0: 
            console.log('Saindo...')
            terminal.close()
            break;
        case 1: 
            console.log('Menu Inicial')
            terminal.question(
                questoes.opcao1.texto,
                questoes.opcao1.fn
            )
            break;
        default:
            console.log('Opção inválida')
            terminal.close()
            break;

    }
}

terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn
)
