import axios from 'axios'
import { debug } from 'util';

export const register = newUser => {
    return axios
        .post('users/register', {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            password: newUser.password
        })
        .then(res => {
            console.log("Registered!")
            return res.status
        })
        .catch(err => {
            console.log(err.response)
            return err.response.status
        })
}

export const login = user => {
    console.log("USER: ", user)
    return axios
        .post('users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            console.log(res)
            localStorage.setItem('usertoken', res.data)
            return res.status
        })
        .catch(err => {
            console.log(err.response)
            return err.response.status
        })
}

export const profile = user => {
    console.log("USER: ", user)
    var config = {
        headers: {'authorization':localStorage.getItem('usertoken')}
    };

    return axios
        .post('users/profile', {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            gender: user.gender,
            birthday: user.birthday

        },config)
        .then(res => {
            console.log(res)
            localStorage.setItem('usertoken', res.data)
            return res.status
        })
        .catch(err => {
            console.log(err.response)
            return err.response.status
        })
}