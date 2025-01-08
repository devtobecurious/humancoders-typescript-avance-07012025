import { GetAllPeopleInfra } from '../infrastructures/get-all-people.infra';
import Enemy, { Droide, StormTrooper } from '../models/enemy'
import { GetAllResult } from './get-all-result';

export class EnemyMachine {
    constructor(private service: GetAllResult) {}

    async load(): Promise<Enemy[]> {
         const result = await this.service.getAll('https://www.swapi.tech/api/people')
         const array: Enemy[] = result.results.map(item => {
            if(item.uid % 2 === 0) {
                return new StormTrooper(item.name)
            } else {
                return new Droide(item.uid.toString())
            }
         })

         return array;
    }
}



