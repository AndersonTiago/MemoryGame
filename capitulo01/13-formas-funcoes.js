function minhaFuncao1(parametro1){
    return `Hello World`
}

const minhaFuncao2 = function(parametro1){
    return `Hello World ${parametro1}`
}

const minhafuncao3 = (parametro1) =>{
    return `Hello World ${parametro1}`
}

const minhaFuncao4 = parametro1 => `Hello World ${parametro1}`

const obj1 = {
    minhaFuncao: parametro1 => `Hello World ${parametro1}` 
}
obj1.minhaFuncao('test')

const obj2 = {
    minhaFuncao (parametro){
        return `Hello World ${parametro}`
    }
}
obj2.minhaFuncao('test')