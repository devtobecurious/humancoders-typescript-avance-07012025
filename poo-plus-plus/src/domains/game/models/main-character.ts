import {Fighter} from '../../fights/models/fighter'

export class MainCharacter implements Fighter {
    private _surname: string
    private _health = 100
   //#surname: string

   constructor(surname: string, age: number) // contrat de constructor vus dpuis l'extérieur
   constructor(surname: number)
   constructor(surname: string | number, age: number = -1) {
    if(typeof(surname) == 'number') { // type guard
        this._surname = surname.toString()
    } else {
        this._surname = surname
    }
   }
    // constructor(surname: string) {
    //     this._surname = surname
    // }

    // constructor(private _surname: string) {   
    // }

    attack(enemy: Fighter): void {
        const attackValue = Math.random() * 10
        enemy.updateLifePoint(attackValue)
    }

    updateLifePoint(value: number): void {
        this._health -= value
    }

    get isAlive(): boolean {
        return this._health > 0
    }
}


