import { Constructor } from "../../../tools/instanciate";

export class Weapon {
    constructor(public id: number, public label: string, public power: number) {}

    static compare(w1: Weapon, w2: Weapon): boolean {
        return w1.id === w2.id
    }
}

// But du mixin : renvoyer une nouvelle class (dynamique) avec des nouvelles propriétés et méthodes
function WithEffect<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        effect: number | undefined
    }
}

// function MyClass() {
//     return class {

//     }
// }

function AddShoot<TBase extends Constructor>(BaseClass: TBase) {
    return class extends BaseClass {
        shoot(): void {
            console.info('pan !')
        }
    }
}

class WeaponWithEffect extends AddShoot(WithEffect(Weapon)) {
    kill(): void {
        this.shoot()
    }
}

class SerialKiller extends AddShoot(WithEffect(Weapon)) {
    what() {
        this.shoot()
    }
}

type WeaponT = {
    label: string
}

type Effect = {
    effect: number
}
type WithEffectBis = Effect & WeaponT

type WithEffectT<T extends { effect: number}> = T & WeaponT
const weapEffect: WithEffectT<Effect> = {
    effect: 12,
    label: 'test'
}