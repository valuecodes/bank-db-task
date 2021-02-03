import { BankAccount } from "../classes/BankAccount";
import { Key } from "../classes/Key";

export interface DatabaseSpecs {
 insert: (newAccount: BankAccount) => boolean
 find: (key:Key) => BankAccount|undefined
 delete: (key:Key) => boolean
}