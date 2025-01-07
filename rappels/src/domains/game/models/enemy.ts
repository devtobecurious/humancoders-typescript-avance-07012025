import {Vector2D} from '../models/vector-2d'
import {Direction} from '../models/directions'

// non instanciable => pas de new
export default abstract class Enemy {
    private _matricule: string 
    protected position = new Vector2D()

    constructor(matricule: string) {
        this._matricule = matricule
    }

    abstract move(direction: Direction): void // j'impose que les extends aient cette méthode déclarée

    attack(): void {
        console.log('I kill you')
    }
}

export class StormTrooper extends Enemy {
    move(direction: Direction): void {
        console.info('Storm moving ready ')
        let vector = new Vector2D()

        switch(direction) {
            case 'East': {
                vector.x = 1
            } break;
        }

        this.position.x += vector.x
        this.position.y += vector.y
    }
}

export class Droide extends Enemy {
    move(direction: Direction): void {
        console.info('Droide moving OK bip bip')
    }
}