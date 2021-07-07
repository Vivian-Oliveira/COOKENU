import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToRecipesList } from '../routes/coordinator'

export const login = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/user/login`, body, history)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToRecipesList(history)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

export const signUp = (body, clear, history, setRightButtonText ) => {
    // setIsLoading(true)
    axios.post(`${BASE_URL}/user/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            // setIsLoading(false)
            goToRecipesList(history)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            // setIsLoading(false)
            alert(err.response.data.message)
        })
}
