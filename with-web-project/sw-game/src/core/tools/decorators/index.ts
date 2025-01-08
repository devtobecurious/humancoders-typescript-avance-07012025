export function logger(type: 'information' | 'warning') {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.info('avant appel, sans connaitre ce qu\'il se passe')
        const originalMethod = descriptor.value // la méthode que je décore

        // je crée une function qui va remplacer la méthode que je décore
        descriptor.value = function(...args: any[]) {
            console.info(`before ${target}, ${propertyKey}`)

            try {
                const result = originalMethod.apply(this, args) // j'exécute la "vraie" méthode
                if(type === 'warning') {
                    console.warn(`after ${target}, ${propertyKey} => ${result}`)
                }
            }
            catch(err) {
                console.error(err)
            }

        }
    }
}