import React from 'react'
import './card-datetime.css'

function CardDatetime(propos) {
    return (
        <div className="card-datetime">
            <div className="card-datetime-header">
                <h4>Retirada</h4>
            </div>

            <div className="card-datetime-line"></div>

            <h4>Data</h4>

            <div className="card-datetime-input">
                <input
                    type="text"
                    placeholder="00/00/00"
                    value={propos.valueDate}
                    onChange={propos.onChangeDate}
                />
            </div>

            <h4>Hora</h4>

            <div className="card-datetime-input">
                <input
                    type="text"
                    placeholder="00:00"
                    value={propos.valueTime}
                    onChange={propos.onChangeTime}
                />
            </div>
        </div>
    )
}

export default CardDatetime