export type Coordinates = [number, number]

export class Vector2D {
    private _x = 0
    private _y = 0

    constructor() // arguments[] => []
    constructor(x: number, y: number) // argments[] => [number, number]
    constructor(coordinates: Coordinates)  // argments[] => [ [number, number], undefined ]

    constructor(args1 ?: number | Coordinates, args2 ?: number) {
        if(args1) { // type guard
            if(typeof(args1) === 'number') { // type guard
                this.x = args1
            } else {
                this.x = args1[0]
                this.y = args1[1]
            }
        }
        this.y = args2 ?? 0
    }

    get x() {
        return this._x
    }
    get y() {
        return this._y
    }

    set x(value: number) {
        if(value < 50) {
            throw new Error('Limit raised')
        }
        this._x = value
    }
    set y(value: number) {
        this._y = value
    }
}