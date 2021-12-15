import React from 'react'
import './input-generic.css'

function InputGeneric(props) {
    return (
        <div className="input-generic">
            {props.icon}
            <input
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default InputGeneric