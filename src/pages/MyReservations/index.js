import React from 'react'
import AppBarGeneric from '../../components/AppBarGeneric'
import CardReservations from '../../components/CardReservations'
import './my-reservations.css'

function MyReservations() {
    return (
        <div className="my-reservations">
            <AppBarGeneric title="Minhas Reservas" name="Razão Social" />

            <div className="my-reservations-list">
                <CardReservations
                    color="#FF7F27"
                    reserveNumber="Numero da Reserva"
                    bookingDate="Data da Reserva"
                    status="Status"
                    pickUpLocation="Local de Retirada"
                    DateOfWithdrawal="Data de Retirada"
                    WithdrawalTime="Horario de Retirada"
                    MarketName="Nome do Mercado"
                    EntityName="Nome da Entidade"
                />

                <div className="my-reservations-space"></div>

                <CardReservations
                    color="#00A2E8"
                    reserveNumber="Numero da Reserva"
                    bookingDate="Data da Reserva"
                    status="Status"
                    pickUpLocation="Local de Retirada"
                    DateOfWithdrawal="Data de Retirada"
                    WithdrawalTime="Horario de Retirada"
                    MarketName="Nome do Mercado"
                    EntityName="Nome da Entidade"
                />

                <div className="my-reservations-space"></div>

                <CardReservations
                    color="#FFAEC9"
                    reserveNumber="Numero da Reserva"
                    bookingDate="Data da Reserva"
                    status="Status"
                    pickUpLocation="Local de Retirada"
                    DateOfWithdrawal="Data de Retirada"
                    WithdrawalTime="Horario de Retirada"
                    MarketName="Nome do Mercado"
                    EntityName="Nome da Entidade"
                />
                
                <div className="my-reservations-space"></div>

                <CardReservations
                    color="#92D050"
                    reserveNumber="Numero da Reserva"
                    bookingDate="Data da Reserva"
                    status="Status"
                    pickUpLocation="Local de Retirada"
                    DateOfWithdrawal="Data de Retirada"
                    WithdrawalTime="Horario de Retirada"
                    MarketName="Nome do Mercado"
                    EntityName="Nome da Entidade"
                />
            </div>
        </div>
    )
}

export default MyReservations