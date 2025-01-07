import {MainCharacter} from './domains/game/models/main-character'
import Enemy, {Droide, StormTrooper} from './domains/game/models/enemy'
import { Direction } from './domains/game/models/directions'
import { Flyer } from './domains/game/models/flyer'
import {Weapon} from './domains/game/models/weapon'

const character = new MainCharacter(1485)
const character2 = new MainCharacter('Luke', 16)


const enemies: Enemy[] = [
    new StormTrooper('XE15M00'),
    new Droide('DD088')
]

enemies.forEach(item => {
    // item.move(Direction.East) // => abandonner l'enum pour un type pipé de string 
    item.move('East')
})


const flyers: Flyer[] = [
    new Droide('DD088'),
    // new StormTrooper('XE15M00') // car pas implements
]
flyers.forEach(item => item.fly('East'))

const weapon = new Weapon(1, 'Crossbow', 100)
const weaponBis = new Weapon(1, 'Crossbow', 100)

const equal = Weapon.compare(weapon, weaponBis)

//#region  A part, pour gagner une pizza
interface WithId {
    id: number
}

interface WithLabel {
    label: string
}

interface WithLabelAndId extends WithLabel, WithId {
}


type PasWeapon = {
    id: number,
    label: string
}

type Sith = {
    id: number,
    label: string
}

function displayLabel(weapon: WithLabel) {
    console.info(weapon.label)
}

displayLabel(weapon)

const weapon2: Weapon = {
    id: 1,
    label: 'Crossbow',
    power: 15
}
displayLabel(weapon2)

const weapon3: PasWeapon = {
    id: 1,
    label: 'Crossbow'
}
displayLabel(weapon3)
//#endregion
