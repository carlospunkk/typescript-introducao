/*
    Abstração é  a capacidade de conseguir pensar no objeto que iremos criar e 
    como implementar seus métodos e atributos
*/

/*
    Herança permite que uma classe compartilhe caracteristicas com outras 
    é usada com o objetivo de evitar repetição , reaproveitamento atributos e métodos.

    (*comunicação entre classes)
*/ 

/*
    Poliformismo permite que uma classe filha chame um método com assinatura diferente . ous seja , 
    o fluxo do método é diferente quando comparado com o original.

*/

// Dio Bank 

// criar contas 

// nome , accountNumber
//depositar , sacar 




// classes abstratas serve de modelo para outras classes e que são classes que não serve para instanciar outras classes


// modulos 

// importar as classes people e company 
import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'

// quando a classe é abstrata ele não deixa instanciar  objetos
const peopleAccount:PeopleAccount = new PeopleAccount(1,'Carlos',22)
//console.log(peopleAccount)
//peopleAccount.deposit()



const companyAccount:CompanyAccount = new CompanyAccount('Dio',50)
//console.log(companyAccount.deposit()) // retorna 2 mudamos o fluxo do método e da assinatura também (:number) assinatura // polimorfismo

companyAccount.deposit()
console.log(companyAccount.accountNumber)

