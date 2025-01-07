import {MainCharacter} from './domains/game/models/main-character'
import Enemy, {Droide, StormTrooper} from './domains/game/models/enemy'
import { Direction } from './domains/game/models/directions'

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
