let validator = false

promise = new Promise((resolve, reject) => {
    if (validator) {
        return reject('404')
    }

    return resolve('200')
})

async function start() {
    try {
        console.log(promise)
        const result = await promise
        console.log(result)
    } catch (e) {
        console.log(e)
    }
}

start()