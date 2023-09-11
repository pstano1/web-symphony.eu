import axios from 'axios'

class API {
    constructor(baseURL,) {
        this.baseURL = baseURL
        this.instance = axios.create({
            baseURL: baseURL
        })
    }
}