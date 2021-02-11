import { AbstractPlayer } from "./AbstractPlayer";

export class RealPlayer extends AbstractPlayer {

    constructor(number:number){
        super(number)
    }

    requestCard(){
        const total = this.holdings.reduce((a,c) => a + c.name,0)
        return total>=18?false:true
    }
}