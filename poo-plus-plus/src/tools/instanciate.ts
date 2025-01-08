
export type Constructor<T = {}> = new (...args: any[]) => T

export type ConstructorBis<T> = { new (...args: any[]): T }

export function instanciate<T>(ItemType: ConstructorBis<T>, ...args: any[]): T {
    return new ItemType(args)
}
