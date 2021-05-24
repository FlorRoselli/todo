const baseUrl = 'https://todos-go.herokuapp.com/api'

const read = () => {
    const promise = fetch(`${baseUrl}/todos`)

    return promise.then(res => res.json())
}

export default read