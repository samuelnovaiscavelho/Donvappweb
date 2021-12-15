import React from 'react'
import { BsFillFilterCircleFill } from "react-icons/bs";
import { FaSearch, FaWarehouse } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AppBarGeneric from '../../components/AppBarGeneric'
import CardMarkets from '../../components/CardMarkets'
import './nearby-markets.css'

function NearbyMarkets() {
    return (
        <div className="nearby-markets">
            <AppBarGeneric title="Mercados Próximos" name="Razão Social" />

            <div className="nearby-markets-header">
                <div className="nearby-markets-filter">
                    <h4>Filtros</h4>
                    <BsFillFilterCircleFill />
                </div>

                <div className="nearby-markets-search">
                    <input
                        type="text"
                        placeholder="Buscar mercados por nome"
                    />
                    <FaSearch />
                </div>
            </div>

            <div className="nearby-markets-list">

                <Link className="link" to="/availableproducts">
                    <CardMarkets
                        color="#B5E61D"
                        icon={<FaWarehouse />}
                        marketName="Nome do Mercado"
                        marketAddress="Endereço do Mercado"
                        cnpjMarket="CNPJ do Mercado"
                        qtyAvailableProducts="Qtd. de Produtos Disponíveis"
                    />
                </Link>

                <div className="nearby-markets-space"></div>

                <Link className="link" to="/availableproducts">
                    <CardMarkets
                        color="#ED1C24"
                        icon={<FaWarehouse />}
                        marketName="Nome do Mercado"
                        marketAddress="Endereço do Mercado"
                        cnpjMarket="CNPJ do Mercado"
                        qtyAvailableProducts="Qtd. de Produtos Disponíveis"
                    />
                </Link>

                <div className="nearby-markets-space"></div>

                <Link className="link" to="/availableproducts">
                    <CardMarkets
                        color="#00A3E9"
                        icon={<FaWarehouse />}
                        marketName="Nome do Mercado"
                        marketAddress="Endereço do Mercado"
                        cnpjMarket="CNPJ do Mercado"
                        qtyAvailableProducts="Qtd. de Produtos Disponíveis"
                    />
                </Link>
            </div>
        </div>
    )
}

export default NearbyMarkets