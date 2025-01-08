export type LiteralKeys<T> = keyof T


function getProperty<TItem, K extends keyof TItem>(item: TItem, key: K): TItem[K] {
    return item[key]
}

const test = {
    id: 1,
    label: 'coucou'
}
const value = getProperty(test, 'label')


type SwitchType<T> = T extends string ? number : Date

const result: SwitchType<typeof test> = new Date()
const resultBis: SwitchType<string> = 1



export type MappedType<Input, Output> = {
    [K in keyof Input]: K extends keyof Output ? Output[K] : never
}

const itemInput = {
    id: 1
}
const itemOutput = {
    id: 'X12045'
}

type ResultType = MappedType<typeof itemInput, typeof itemOutput>
const resultMatricule: ResultType = {
    id: 'test' 
}
