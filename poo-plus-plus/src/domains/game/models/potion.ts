export interface Item<T>  {
    data: T
}

const item: Item<unknown> = {
    data: 'hello'
}

//export class Potion<Data extends Record<string, unknown>, U> implements Item<Data> {
export class Potion<Data extends {id: number}, U> implements Item<Data> {
    id: number
    label: string

    data: Data
    container: U

    constructor(data: Data) {
        if(data.id && typeof(data.id) === 'number') {
            this.id = data.id
        }
    }
}

type WithId = {
    id: number,
    effect: number
}

export class PotionWithEffect extends Potion<WithId, string> {}
const myPotion: PotionWithEffect = {
    container: '',
    id: 0,
    label: '',
    data: {
        id: 1,
        effect: 12
    }
}

// compile pas car ne respecte pas la contrainte
// export class PotionWithDataDynamic<W> extends Potion<Record<string, W>, string> {
// }   

// lié à la ligne 30
// const potionYolo: PotionWithDataDynamic<boolean> = {
//     container: '',
//     id: 1, 
//     label: '',
//     data: {
//         id: true
//     }
// }

const record: Record<string, boolean> = {
    id: true,
    effect: true
}

// const potion = new Potion<{id: number}, string>()
// const potion = new PotionWithEffect()
// potion.data = {
//     effect: 10
// }

//#region Unknown vs any
// function display(item: any): void {
//     console.info(item.toFixed(2))
// }

function display(item: unknown): void { // force à écrire un typeguard
    if(typeof(item) === 'number') { // type guard
        console.info(item.toFixed(2))
    }
}

display(2)
display('hello')
//#endregion