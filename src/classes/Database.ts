import { BankAccount } from "./BankAccount";
import { Key } from "./Key";
import { DatabaseSpecs } from '../interfaces/DatabaseSpecs'

export class Database implements DatabaseSpecs {

    accounts: BankAccount[]

    constructor(){
        this.accounts = []
    }

    insert = (newAccount: BankAccount):boolean => {
        const newKey = newAccount.getKey()
        let accountFound = this.accounts
            .find(item => item.getKey().equals(newKey.key))
        if(accountFound) return false
        this.accounts = [...this.accounts,newAccount]
        return true
    }

    find = (key:Key):BankAccount|undefined =>{
        return this.accounts.find(item => item.getKey().equals(key.key))
    }

    delete = (key:Key):boolean => {
        const accountFound = this.find(key)
        if(!accountFound) return false
        this.accounts = this.accounts.filter(item => !item.getKey().equals(key.key))
        return true
    }
}