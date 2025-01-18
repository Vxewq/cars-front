import axios from "axios"

export const back = axios.create({
    baseURL:"https://cars-backend-8imc.onrender.com"
})