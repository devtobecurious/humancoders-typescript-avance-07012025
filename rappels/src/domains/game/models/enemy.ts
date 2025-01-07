// non instanciable => pas de new
export default abstract class Enemy {
    private _matricule: string 

    constructor(matricule: string) {
        this._matricule = matricule
    }

    abstract move(): void // j'impose que les extends aient cette méthode déclarée

    attack(): void {
        console.log('I kill you')
    }
}

export class StormTrooper extends Enemy {
    move(): void {
        console.info('Storm moving ready ')
    }
}

export class Droide extends Enemy {
    move(): void {
        console.info('Droide moving OK bip bip')
    }
}