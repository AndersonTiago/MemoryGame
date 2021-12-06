const readLine = require('readline')
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

// terminal.question('Qual é o se nome?\n',nome=>{
//     terminal.question('Qual é seu telefone?\n', telefone =>{
//         console.log(
//             `
//                 Nome: ${nome},
//                 Telefone: ${telefone}        
//             `
//         )
//     })
// })

function questionAsync(texto){
    return new Promise((resolve, reject) =>{
        terminal.question(`${texto}\n`, resolve)
    })
}

Promise.resolve()
        .then(() => questionAsync('Qual é o seu nome?'))
        .then(respostaNome =>{
            if(!respostaNome) throw new Error('campo vazio!')
            nome = respostaNome
        })
        .then(() => questionAsync('Qual é o seu telefone'))
        .then(respostaTelefone => {
            if(!respostaTelefone) throw new Error('campo vazio!')
            telefone = respostaTelefone
        })
        .then(() => {
            console.log(`Nome: ${nome}, Telefone: ${telefone}`)
        })
        .catch(error => {
            console.log('Deu ruim**', error.stack)
        })
        .finally(() => terminal.close())