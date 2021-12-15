import React from 'react'
import './card-markets.css'

function CardMarkets(propos) {
    return (
        <div className="card-markets-conteiner">
            <div className="card-markets-conteiner-left" style={{ backgroundColor: propos.color }}></div>
            <div className="card-markets-conteiner-line"></div>
            <div className="card-markets-conteiner-icon">
                {propos.icon}
            </div>
            <div className="card-markets-conteiner-text">
                <h4>{propos.marketName}</h4>
                <h4>{propos.marketAddress}</h4>
            </div>
            <div className="card-markets-conteiner-text">
                <h4>{propos.cnpjMarket}</h4>
                <h4>{propos.qtyAvailableProducts}</h4>
            </div>
        </div>
    )
}

export default CardMarkets