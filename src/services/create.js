import axios from 'axios'

const baseUrl = 'https://todos-go.herokuapp.com/api'

const create = newTask => {
    const promise = axios({
        method: 'POST',
        url: `${baseUrl}/todos`,
        data: newTask
    })
    return promise
}
export default create