import { Key } from "../classes/Key";

export interface BankAccountSpecs{
    deposit: (amount: number) => boolean
    getBalance: () => number
    getKey: () => Key
}