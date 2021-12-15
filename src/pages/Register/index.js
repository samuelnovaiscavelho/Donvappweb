import React, { useState } from 'react'
import { MdEmail, MdPerson, MdBusiness, MdLocationOn } from "react-icons/md"
import { AiOutlineFieldNumber } from "react-icons/ai"
import { TiDocumentText } from "react-icons/ti"
import ButtonGeneric from '../../components/ButtonGeneric'
import InputGeneric from '../../components/InputGeneric'
import InputPassword from '../../components/InputPassword'
import './register.css'

function Register() {
    const [name, setName] = useState("")
    const [cnpj, setCnpj] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cep, setCep] = useState("")
    const [road, setRoad] = useState("")
    const [number, setNumber] = useState("")
    const [complement, setComplement] = useState("")
    const [district, setDistrict] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")

    return (
        <div className="register">
            <div className="register-center">
                <h1>Cadastrar</h1>

                <InputGeneric
                    icon={<MdPerson />}
                    type="text"
                    placeholder="Digite sua Razão Social"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <InputGeneric
                    icon={<MdBusiness />}
                    type="text"
                    placeholder="Digite seu CNPJ"
                    value={cnpj}
                    onChange={e => setCnpj(e.target.value)}
                />

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

                <InputGeneric
                    icon={<MdLocationOn />}
                    type="text"
                    placeholder="Digite seu CEP"
                    value={cep}
                    onChange={e => setCep(e.target.value)}
                />

                <InputGeneric
                    icon={<MdLocationOn />}
                    type="text"
                    placeholder="Digite sua Rua"
                    value={road}
                    onChange={e => setRoad(e.target.value)}
                />

                <InputGeneric
                    icon={<AiOutlineFieldNumber />}
                    type="text"
                    placeholder="Digite seu Numero"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />

                <InputGeneric
                    icon={<TiDocumentText />}
                    type="text"
                    placeholder="Digite um Complemento"
                    value={complement}
                    onChange={e => setComplement(e.target.value)}
                />

                <InputGeneric
                    icon={<MdLocationOn />}
                    type="text"
                    placeholder="Digite seu Bairro"
                    value={district}
                    onChange={e => setDistrict(e.target.value)}
                />

                <InputGeneric
                    icon={<MdLocationOn />}
                    type="text"
                    placeholder="Digite seu Estado"
                    value={state}
                    onChange={e => setState(e.target.value)}
                />

                <InputGeneric
                    icon={<MdLocationOn />}
                    type="text"
                    placeholder="Digite sua Cidade"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />

                <ButtonGeneric text='Cadastrar' link='/' />
            </div>
        </div>
    )
}

export default Register