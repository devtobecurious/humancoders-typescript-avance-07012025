import { Direction } from "./directions";

export interface Flyer {
    // fly(direction: any): void // be careful, vérifie juste le typage à générer
    fly(direction: Direction): void
}