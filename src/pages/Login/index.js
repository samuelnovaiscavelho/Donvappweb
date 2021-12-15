import React, { useState } from 'react'
import { MdEmail } from "react-icons/md"
import ButtonGeneric from '../../components/ButtonGeneric'
import InputGeneric from '../../components/InputGeneric'
import InputPassword from '../../components/InputPassword'
import './login.css'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="login">
            <div className="login-center">
                <h1>Acessar</h1>

                <InputGeneric
                    icon={<MdEmail />}
                    type="email"
                    placeholder="Digite seu Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <InputPassword
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <div className="login-space"></div>

                <ButtonGeneric text='Entrar' link='/menu' />

                <h4>ou</h4>

                <ButtonGeneric text='Cadastrar' link='/register' />
            </div>
        </div>
    )
}

export default Login