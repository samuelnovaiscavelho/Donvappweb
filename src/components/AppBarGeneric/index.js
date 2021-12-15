import React from 'react'
import { CgMenuGridR } from "react-icons/cg"
import { IoPersonCircleSharp } from "react-icons/io5"
import { MdArrowDropDown } from "react-icons/md"
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-donv-branco.png';
import './app-bar-generic.css'

function AppBarGeneric(props) {
    return (
        <div className="app-bar-generic">
            <div className="app-bar-generic-left">
                <Link className="link" to="/menu"><CgMenuGridR /></Link>
                <h4>{props.title}</h4>
            </div>

            <div className="app-bar-generic-center">
                <img src={logo} alt="Logo" />
            </div>

            <div className="app-bar-generic-right">
                <IoPersonCircleSharp />
                <h4>{props.name}</h4>
                <MdArrowDropDown />
                <div className="app-bar-generic-right-space"></div>
            </div>
        </div>
    )
}

export default AppBarGeneric