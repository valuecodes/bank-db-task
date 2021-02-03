import { KeySpecs } from "../interfaces/KeySpecs"

export class Key implements KeySpecs{
    
    key: number

    constructor(newKey: number){
        this.key = newKey
    }

    equals(key:number):boolean {
        return this.key === key
    }
}