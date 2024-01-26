export abstract class DioAccount {
   private name:string
    readonly accountNumber:number // só leitura
     //(saldo)
     balance:number = 0
     status:boolean = true

    // método construtor 
    constructor(name:string,accountNumber:number){
        this.name = name
        this.accountNumber = accountNumber
        
    }
    // setar o meu atributo abstrato : assinatura do método 
    setName = (name:string):void =>{
        this.name = name
        console.log('nome alterado com sucesso')
    }

    getName = ():string =>{
        return this.name
    }

    // método deposit
    deposit = ():void =>{
        if(this.validateStatus()){
            console.log('vc depositou')
        }
        
    }

    // método sacar 
    withdraw = ():void =>{
        console.log('voce sacou ')
    }

     // saldo 
     getBalance = ():void =>{
        console.log(this.balance)
    }

    private validateStatus = ():boolean =>{
        if(this.status){
            return this.status
        }
        throw new Error()
        
    }
}