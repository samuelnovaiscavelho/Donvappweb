import React from 'react'
import './card-reservations.css'

function CardReservations(propos) {
    return (
        <div className="card-reservations-conteiner">
            <div className="card-reservations-conteiner-left" style={{ backgroundColor: propos.color }}></div>
            <div className="card-reservations-conteiner-line"></div>
            <div className="card-reservations-conteiner-center">
                <div className="card-reservations-space"></div>
                <h4>{propos.reserveNumber}</h4>
                <h4>{propos.bookingDate}</h4>
                <h4>{propos.status}</h4>
            </div>
            <div className="card-reservations-conteiner-center">
                <div className="card-reservations-space"></div>
                <h4>{propos.pickUpLocation}</h4>
                <h4>{propos.DateOfWithdrawal}</h4>
                <h4>{propos.WithdrawalTime}</h4>
            </div>
            <div className="card-reservations-conteiner-center">
                <div className="card-reservations-space"></div>
                <h4>{propos.MarketName}</h4>
                <h4>{propos.EntityName}</h4>
            </div>
        </div>
    )
}

export default CardReservations