import { AbstractPlayer } from "./AbstractPlayer";
import { CardSelectionService } from "./services/CardSelectionService";

export class BotPlayer extends AbstractPlayer {

    private decide: () => boolean

    constructor(number:number){
        super(number)
        this.decide = new CardSelectionService().decide
    }

    requestCard(){
        return this.decide()
    }
}