import DeathMatchFight from './domains/fights/models/death-match-fight'
import { EnemyMachine } from './domains/game/applicatifs/enemy-machine'
import { GetAllPeopleInfra } from './domains/game/infrastructures/get-all-people.infra'
import { ApiResult } from './domains/game/infrastructures/models'
import Enemy, { Droide, StormTrooper } from './domains/game/models/enemy'
import { Flyer } from './domains/game/models/flyer'
import { MainCharacter } from './domains/game/models/main-character'
import { Weapon } from './domains/game/models/weapon'

const character = new MainCharacter(1485)
const character2 = new MainCharacter('Luke', 16)


const fightMotor = new DeathMatchFight()
fightMotor.run(character, { 
    attack: (enemy) => enemy.updateLifePoint(50),
    isAlive: true,
    updateLifePoint: value => {
    }
})

if(character.isAlive) {
    console.info('youpi je suis en vie')
}

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


// const enemyMachine = new EnemyMachine(new GetAllPeopleInfra())
// const enemyMachine = new EnemyMachine({
//     getAll: (url: string) => {
//         return new Promise<ApiResult>(resolve => {
//             resolve({
//                 results: []
//             })
//         })
//     }
// })

const fakeInfra: GetAllPeopleInfra = {
    getAll: (url: string) => {
        return new Promise<ApiResult>(resolve => {
            resolve({
                results: []
            })
        })
    }
}
const enemyMachine = new EnemyMachine(fakeInfra)

enemyMachine.load().then(items => {
    console.info(items.length)
})


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

//#region Exemple Satisfies
type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];
const palette = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [0, 0, 255]
//  ~~~~ The typo is now caught!
} satisfies Record<Colors, string | RGB>;
// toUpperCase() method is still accessible!
const greenNormalized = palette.green.toUpperCase();
//#endregion