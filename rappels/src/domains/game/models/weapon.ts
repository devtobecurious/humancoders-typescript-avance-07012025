export class Weapon {
    constructor(public id: number, public label: string, public power: number) {}

    static compare(w1: Weapon, w2: Weapon): boolean {
        return w1.id === w2.id
    }
}