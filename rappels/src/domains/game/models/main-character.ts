export class MainCharacter {
    private _surname: string
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
}