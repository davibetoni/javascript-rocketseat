let validator = false

promise = new Promise((resolve, reject) => {
    if (validator) {
        return reject('error')
    }

    return resolve('funcionou')
})

promise.then(res => console.log(res))
    .catch(e => console.log(e))