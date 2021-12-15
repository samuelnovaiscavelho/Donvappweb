import React, { useState } from 'react'
import { MdEmail, MdPerson, MdBusiness, MdLocationOn } from "react-icons/md"
import { BsPersonCircle } from "react-icons/bs"
import { AiOutlineFieldNumber } from "react-icons/ai"
import { TiDocumentText } from "react-icons/ti"
import InputGeneric from '../../components/InputGeneric'
import InputPassword from '../../components/InputPassword'
import AppBarGeneric from '../../components/AppBarGeneric'
import './my-profile.css'

function MyProfile() {
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
        <div className="my-profile">

            <AppBarGeneric title="Meu Perfil" name="Razão Social" />

            <div className="my-profile-space"></div>
            
            <BsPersonCircle className="my-profile-svg" />

            <div className="my-profile-space"></div>

            <div className="my-profile-center">
                <div className="my-profile-center-conteiner">
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
                </div>

                <div className="my-profile-line"></div>

                <div className="my-profile-center-conteiner">
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
                </div>
            </div>

            <div className="my-profile-space"></div>

            <button type="submit">Salvar Alterações</button>

            <div className="my-profile-space"></div>
        </div>
    )
}

export default MyProfile