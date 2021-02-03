import { BankAccount } from "./classes/BankAccount";
import { Database } from "./classes/Database";
import { Key } from "./classes/Key";

let db = new Database()

let firstKey = new Key(12345)
let firstAccount = new BankAccount(5000, firstKey)
let firstResult = db.insert(firstAccount)

let secondKey = new Key(5678)
let secondAccount = new BankAccount(1000,secondKey)
let secondResult = db.insert(secondAccount)

let thirdKey = new Key(12345213)
let thirdAccount = new BankAccount(5000, thirdKey)
let thirdResult = db.insert(thirdAccount)

let lookAccount = db.find(secondKey)

db.delete(secondKey)

console.log(db,lookAccount)