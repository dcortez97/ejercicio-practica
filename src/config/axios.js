import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: 'https://eshop-deve.herokuapp.com'
})

export default clienteAxios