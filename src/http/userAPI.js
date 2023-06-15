import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (login, password, role) => {

    const {data} = await $host.post('user/registration', {login, password, role})
    
    return jwt_decode(data.token)
}


export const loginAPI = async (login, password) => {

    const {data} = await $host.post('user/login', {login, password})
    localStorage.setItem('token', data.token)
    console.log("авторизация")

    console.log(data.token)
    return jwt_decode(data.token)
}


export const check = async () => {
    const {data} = await $authHost.get('user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}