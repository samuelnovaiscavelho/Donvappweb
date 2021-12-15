import React, { useState } from 'react'
import { FaWarehouse } from "react-icons/fa";
import AppBarGeneric from '../../components/AppBarGeneric'
import CardProducts from '../../components/CardProducts'
import CardDatetime from '../../components/CardDatetime'
import './available-products.css'

function AvailableProducts() {
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    return (
        <div className="available-products">
            <AppBarGeneric title="Produtos Disponíveis" name="Razão Social" />

            <div className="available-products-center">
                <div className="available-products-left">
                    <div className="available-products-left-top">
                        <FaWarehouse />

                        <div className="available-products-conteiner">
                            <h1>Nome do Mercado</h1>
                            <h4>CNPJ</h4>
                            <h4>Endereço do Mercado</h4>
                        </div>
                    </div>

                    <div className="available-products-left-botton">
                        <CardProducts
                            foodName="Nome do Alimento"
                            DueDate="Data de Vencimento"
                            Amount="Quantidade"
                        />

                        <CardProducts
                            foodName="Nome do Alimento"
                            DueDate="Data de Vencimento"
                            Amount="Quantidade"
                        />

                        <CardProducts
                            foodName="Nome do Alimento"
                            DueDate="Data de Vencimento"
                            Amount="Quantidade"
                        />

                        <CardProducts
                            foodName="Nome do Alimento"
                            DueDate="Data de Vencimento"
                            Amount="Quantidade"
                        />

                        <CardProducts
                            foodName="Nome do Alimento"
                            DueDate="Data de Vencimento"
                            Amount="Quantidade"
                        />
                    </div>
                </div>

                <div className="available-products-right">
                    <div className="available-products-right-top">
                        <CardDatetime
                            valueDate={date}
                            onChangeDate={e => setDate(e.target.value)}
                            valueTime={time}
                            onChangeTime={e => setTime(e.target.value)}
                        />
                    </div>

                    <div className="available-products-right-botton">
                        <h4>16 Produtos Selecionados</h4>

                        <button type="submit">Salvar Alterações</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvailableProducts