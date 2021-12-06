const pessoa = {
    _nome: '',
    _idade: 20,
    get nome (){
        return this._nome
    },
    set nome(a){
        this._nome = a.toUpperCase() 
    },

    get podeDirigir(){
        return this._idade>18
    },

    get idade(){
        return this._idade
    },
    set idade(valor){
        this._idade = valor
    },
    get all(){
        return this._nome, this._idade
    }
}


pessoa.nome = "maria do céu"
console.log(pessoa.nome)

pessoa.idade = 16
console.log(pessoa.podeDirigir)
console.log(pessoa.idade)

console.log(pessoa.all)