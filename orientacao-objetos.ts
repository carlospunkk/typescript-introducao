// objetos

/*

declaração do tipo de objeto 
utilizamos interface

*/
//tipo Pessoa 
interface Pessoa {
    nome: string,
    idade: number
    profissão?: string  // quando tiver ? esse tipo é opcional ele não é obrigatorio 
}

/*
const pessoa = {


//propriedade nome : Valor carlos
    nome: 'carlos',
    idade: 32
}
*/

// objeto 1  pessoa recebe o tipo Pessoa de objeto com seus valores 
const pessoa: Pessoa = {
    nome: 'carlos',
    idade: 42

}

// objeto 2 
const outraPessoa: Pessoa = {
    nome: 'Carlos',
    idade: 25,
    profissão: 'desenvolvedor'

}
console.log(pessoa.nome)

// array de objetos: o arrayPessoa é do tipo Array<Pessoa> ou Pessoa [] e dentro vou receber objetos do tipo pessoa
const arrayPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
]
console.log(arrayPessoa)

// array recebendo determinado tipo de objeto number com suas propriedades 

const numeros: number[] = [
    1, 2, 3
]
console.log(numeros)

const arrayString: Array<string> = [
    '4', '5', '6'
]
console.log(arrayString)



// estruturas de repetição  // objetos literais // estruturas de repetição

const num: number = 15

if (num > 15) {
    console.log('num maior que 15')
}
else {
    console.log('num menor que 15')
}


// objeto literal 
const typeUser = {
    admin: 'seja bem vindo',
    student: 'voce é estudante',
    viewer: 'voce pode visualizar'
}

// acessando o objeto literal e verificando 

function ValidateUser(valor: string) {
    console.log(valor)
}
ValidateUser(typeUser.admin)
ValidateUser(typeUser.student)
ValidateUser(typeUser.viewer)

// estruturas de repetição 
// for
for (let i = 0; i < 5; i++) {
    console.log(i)
}


// Arrays (lista)
const array: Array<number> = [1, 2, 3, 4,]
const stringArray: string[] = ['um', 'dois', 'tres']

// acessando o valor do array 
//console.log(array[0])

// função length (mostra quantidade de elementos do nosso array)
//console.log(stringArray.length)

// adicionar elementos no array (ultimo elemento)
//stringArray.push('quatro')
//console.log('adiciona',stringArray)

// remove o ultimo elemento 
//console.log('remove',stringArray.pop())

// manipulando arrays


//             busca (parametro , condição)
/*const busca = array.find(num => num > 3) // retorna o primeiro valor que atende a nossa condição 
    console.log(busca)*/

const arrayNovo: number[] = [1, 2, 3, 4, 1, 11]

// foreach intera o meu array ,  só imprimi os numeros maaaaaque dois 
arrayNovo.forEach(item => {
    if (item > 2 || item === 11) {
        console.log('estes numeros são maiores que 2 : ' + item * 2)
    }
})


// Classes

class User {
    name:string =''
    age:number = 42


    // construtor 

    constructor(name:string,age:number,){
        this.name = name
        this.age = age
       
    }

    // método 

    mostra = () => {
        console.log(this.name)
        console.log(this.age)
    }

    
}



// objeto user 

const user:User= new User('Eduardo',42)
user.mostra()


// objeto 2 

const otherUser = new User('romeu',40)
otherUser.mostra() // chama o método mostra ou função 











