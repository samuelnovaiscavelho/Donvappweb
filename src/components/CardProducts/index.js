import React from 'react'
import { IoFastFoodSharp } from "react-icons/io5";
import { MdAddCircleOutline } from "react-icons/md";
import './card-products.css'

function CardProducts(propos) {
    return (
        <div className="card-products-conteiner">
            <div className="card-products-conteiner-row">
                <IoFastFoodSharp />

                <div className="card-products-space"></div>

                <div className="card-products-column">
                    <h4>{propos.foodName}</h4>
                    <h4>{propos.DueDate}</h4>
                    <h4>{propos.Amount}</h4>
                </div>
            </div>

            <MdAddCircleOutline />
        </div>
    )
}

export default CardProducts