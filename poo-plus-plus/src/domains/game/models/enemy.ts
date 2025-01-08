import {Vector2D} from '../models/vector-2d'
import {Direction} from '../models/directions'
import {Flyer} from '../models/flyer'

// non instanciable => pas de new
export default abstract class Enemy {
    private _matricule: string 
    protected position = new Vector2D()

    constructor(matricule: string) {
        this._matricule = matricule
    }

    // abstract move(direction: Direction): void // j'impose que les extends aient cette méthode déclarée

    move(direction: Direction): void {
        console.info(`Storm moving ready ${this._matricule}`)
        let vector = new Vector2D()

        switch(direction) {
            case 'East': {
                vector.x = this.moveRatio
            } break;
            case 'West': {
                vector.x = -this.moveRatio
            } break;
            case 'North': {
                vector.y = -this.moveRatio
            } break;
            case 'South': {
                vector.y = this.moveRatio
            } break;
        }

        this.position.x += vector.x
        this.position.y += vector.y
    }

    attack(): void {
        console.log('I kill you')
    }

    abstract get moveRatio(): number
}

export class StormTrooper extends Enemy {
    get moveRatio(): number {
        return 1
    }    
}

export class Droide extends Enemy implements Flyer {
   
 fly(direction: Direction): void {
        this.move(direction)
    }
    get moveRatio(): number {
        return 2
    }
}