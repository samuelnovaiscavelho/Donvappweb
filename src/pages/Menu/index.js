import React from 'react'
import { MdPerson } from "react-icons/md"
import { BsCalendarWeekFill } from "react-icons/bs"
import { FaWarehouse } from "react-icons/fa"
import { Link } from 'react-router-dom'
import './menu.css'

function Menu() {
    return (
        <div className="menu">
            <h1>Menu</h1>

            <div className="menu-center">
                <Link className="link" to="/myprofile">
                    <div className="menu-conteiner">
                        <MdPerson />
                        <h4>Meu Perfil</h4>
                    </div>
                </Link>
                <div className="menu-space-right"></div>
                <Link className="link" to="/myreservations">
                    <div className="menu-conteiner">
                        <BsCalendarWeekFill />
                        <h4>Minhas Reservas</h4>
                    </div>
                </Link>
                <div className="menu-space-right"></div>
                <Link className="link" to="/nearbymarkets">
                    <div className="menu-conteiner">
                        <FaWarehouse />
                        <h4>Mercados Próximos</h4>
                    </div>
                </Link>
            </div>

            <div className="menu-space-bottom"></div>

            <Link to="/"><button type="submit">Sair</button></Link>

            <div className="menu-space-button"></div>
        </div>
    )
}

export default Menu