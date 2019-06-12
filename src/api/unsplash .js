import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ff3b776bce2236f9b47c513363065990748f536c9292fbbe5d82116b833dcb2c'
    }
})