import { Key } from './Key'
import { BankAccountSpecs } from '../interfaces/BankAccountSpecs'

export class BankAccount implements BankAccountSpecs{

    key: Key
    balance:number

    constructor(deposit:number,key:Key){
        this.key = key
        this.balance = deposit
    }

    deposit = (amount: number):boolean => {
        this.balance += amount
        return true
    }

    getBalance = ():number => {
        return this.balance
    }

    getKey = ():Key => {
        return this.key
    }
}