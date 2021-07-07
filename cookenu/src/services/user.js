import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToRecipesList } from '../routes/coordinator'

export const login = (body, clear, history) => {
    axios.post(`${BASE_URL}/user/login`, body, history)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToRecipesList(history)
        })
        .catch((err) => {
            alert("Erro ao logar")
        })
}

export const signUp = (body, clear, history) => {
    // setIsLoading(true)
    axios.post(`${BASE_URL}/user/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            // setIsLoading(false)
            goToRecipesList(history)
            // setRightButtonText("Logout")
        })
        .catch((err) => {
            // setIsLoading(false)
            alert(err.response.data.message)
        })
}
