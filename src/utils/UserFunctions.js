import axios from 'axios'
import { debug, callbackify } from 'util';
import { Base64 } from 'js-base64'

export const register = newUser => {
    return axios
        .post('http://localhost:5000/users/register', {
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

export const addStatistic = newStatistic => {
    return axios
        .post('http://localhost:5000/statistics/addStatistic', {
            userId: newStatistic.userId,
            chapter: newStatistic.chapter,
            date: newStatistic.date,
            corectAnswers: newStatistic.corectAnswers,
            totalQuestions:newStatistic.totalQuestions,
            percentage:newStatistic.percentage,
        })
        .then(res => {
            console.log("ADD STATISTIC CALLED")
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
        .post('http://localhost:5000/users/login', {
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
            title: user.title,
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

export const getExercises = (difficulty, subch) => {
    return axios
        .post('http://localhost:5000/exercises/getExercises/' + difficulty, {
                subchapter: subch
        })
        .then(res => {
            console.log("asdadasdadAS", res.data)
            return res.data
        })
        .catch(err => {
            console.log(err.response);
            return err.response.status
        })
}
export const getEasyQuiz = (subch) => {
    return axios
        .post('http://localhost:5000/exercises/getEasyQuiz', {
                subchapter: subch,
        })
        .then(res => {
            console.log("EASYYY QUIZZZZZZZZZZZ")
            return res.data
        })
        .catch(err => {
            console.log(err.response);
            return err.response.status
        })
}

export const getMediumQuiz = (subch) => {
    return axios
        .post('http://localhost:5000/exercises/getMediumQuiz', {
                subchapter: subch,
        })
        .then(res => {
            console.log("MEDIUM QUIZZZZZZZZZZZ")
            return res.data
        })
        .catch(err => {
            console.log(err.response);
            return err.response.status
        })
}


export const getHardQuiz = (subch) => {
    return axios
        .post('http://localhost:5000/exercises/getHardQuiz', {
                subchapter: subch,
        })
        .then(res => {
            console.log("HARDDDDD QUIZZZZZZZZZZZ")
            return res.data
        })
        .catch(err => {
            console.log(err.response);
            return err.response.status
        })
}


export const getEmotions = (picture) => {
    console.log(picture);
    var picturetoSed = Buffer.from(picture, 'base64');
    var config = {
        headers: { 'Ocp-Apim-Subscription-Key': '254abbacfa04465db4f3ac5cc834a829', 'Content-Type' : 'application/octet-stream' }
    };

    return axios
    .post('https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=emotion' , picturetoSed, config, {
    })
    .then(res => {
        console.log("data log: ", res.data)
        console.log("data log: ", res.data[0].faceAttributes.emotion)
        return  res.data[0].faceAttributes.emotion
    })
    .catch(err => {
        console.log(err.response)
        return err.response
    })
    

}
export const getStatistics = (userId) => {
    return axios
        .post('http://localhost:5000/statistics/getStatistics/' + userId, {
        })
        .then(res => {
            console.log("asdadasdadAS", res.data)
            return res.data
        })
        .catch(err => {
            console.log(err.response)
            return err.response.status
        })
}