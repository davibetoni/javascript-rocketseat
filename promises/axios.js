import axios from 'axios'

const response = axios.get('https://api.github.com/users/maykbrito')

console.log(response) // Promise pending

async function get() {
    try {
        const res = await response
        console.log(res.status)

        const data = res.data
        console.log(data.login)

        const orgs = await axios.get(data.organizations_url)
        console.log(orgs.data.length)
    } catch (e) {
        console.log(e.code)
    }
}

get()