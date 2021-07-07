import React from 'react'
import { InputsContainer } from './styled'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import useForm from '../../hooks/useForm'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'

const LoginForm = ({ setRightButtonText}) => {
    const [form, onChange, clear] = useForm({
        email: "",
        password: ""
    })
    const history = useHistory()

    const onSubmitForm = (e) => {
        e.preventDefault()
        login(form, clear, history, setRightButtonText)
    }

    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                    >
                        Fazer Login
                    </Button>
                </form>
            </InputsContainer>
    )
}

export default LoginForm
