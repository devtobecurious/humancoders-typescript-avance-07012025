import { LiteralKeys } from "../../core/tools"
import { logger } from "../../core/tools/decorators"

export class Jedi {
    // @required()
    surname: string | undefined

    // @nullable()
    typeSaber = 'light'
    // @range(0, 100)
    lifePoint = 10
    
    @logger('information')
    attack(): void {
        this.lifePoint --
    }
}


export type JediKeys = LiteralKeys<Jedi>
const keyJedi: JediKeys = 'surname'