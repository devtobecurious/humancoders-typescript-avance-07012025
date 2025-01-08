export interface Fighter {
    attack(enemy: Fighter): void
    updateLifePoint(value: number): void
    get isAlive(): boolean
}