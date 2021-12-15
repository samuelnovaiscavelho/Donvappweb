import React from 'react'
import { Link } from 'react-router-dom'
import './button-generic.css'

function ButtonGeneric(props) {
    return (
        <div className="button-generic">
            <Link to={props.link}>
                <button type="submit">{props.text}</button>
            </Link>
        </div>
    )
}

export default ButtonGeneric