import React, { useState } from 'react'
import { MdLock } from "react-icons/md"
import { HiEye, HiEyeOff } from "react-icons/hi"
import './input-password.css'

function InputPassword(props) {
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    return (
        <div className="input-password">
            <MdLock />
            <input
                placeholder="Digite sua Senha"
                type={show ? "text" : "password"}
                value={props.password}
                onChange={props.onChange}
            />
            <div className="input-password-eye">
                {show ? (<HiEye size={20} onClick={handleClick} />) : (<HiEyeOff size={20} onClick={handleClick} />)}
            </div>
        </div>
    )
}

export default InputPassword