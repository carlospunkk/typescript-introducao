
import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount{
    doc_id:number

    constructor(doc_id:number,name:string,accountNumber:number){
        super(name,accountNumber) // para setar os valores referentes a classe mae (*Account)
        this.doc_id = doc_id
    }

    // método da classe mae indicando polimorfismo com assinatura e metodo com retorno number
   withdraw =():number => {
     return 1
   }


}
