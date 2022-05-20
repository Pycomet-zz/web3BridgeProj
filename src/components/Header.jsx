import React from 'react'
import styled from 'styled-components'

const LogoName = styled.h2`
    font-weight: 600;
    font-size: 3em;
    padding-bottom: 0.5em;
    border-bottom: 1px solid #fff;
`

const RoomMarkersDiv = styled.div`
    text-align: left;
    text-decoration: italic
`

export const Header = ({ rooms, slots }) => {

    return (
        <div className='row'>
            <LogoName>Web3Bridge Room Allocation System</LogoName>

            <RoomMarkersDiv>
                <p>Total Number Of Available Rooms Left - {rooms}</p>
                <p>Accomodation slots left - {slots}</p>
            </RoomMarkersDiv>
        </div>
    )
}