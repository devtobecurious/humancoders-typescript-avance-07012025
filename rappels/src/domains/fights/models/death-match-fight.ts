import { Fighter } from "./fighter";

export default class DeathMatchFight {
    run(fighter1: Fighter, fighter2: Fighter): void {
        while(fighter1.isAlive && fighter2.isAlive) {
            fighter1.attack(fighter2)

            if(fighter2.isAlive) {
                fighter2.attack(fighter1)
            }
        }
    }
}