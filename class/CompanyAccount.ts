
import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount{

    constructor(name:string,accountNumber:number){
        super(name,accountNumber) // para setar os valores referentes a classe mae (*Account)
    }
    getLoan = ():void =>{
        console.log('voce pegou um emprestimo')
    }
    deposit = ():number =>{
        return 2
    }
}

