const user = {
    name: 'Davi'
}

console.log(user.name)

let names: string[] = ['1', '2', 's']

function printUserId(id: number | string) { // union
    console.log(`O ID é: ${id}`)
}

printUserId('123')

function set<T extends string | number>(id: T) { // generic
    const object = {
        objectId: id,
        file: `file_${id}.txt`,
        size: 10
    }

    return object
}

const puts = <T extends string | number>(to_put: T) => { // arrow function generic
    console.log(to_put)
}

const newObject = set('123')
let property: keyof typeof newObject // tem que tipar o property pra usar no for in
for (property in newObject) {
    puts(newObject[property])
}
puts(123)