import styled from 'styled-components'
import Instagram_icons from './InstagramLogos/Instagram_icons.png'

const SearchBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;

const InstagramIcon = styled.img`
    width: 170px;
    padding: 10px;
    object-fit: contain;
    `

const RightLogos = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    `;

const Logos = styled.img`
    width: 45px;
    padding: 10px;
    object-fit: contain;
    `

export { SearchBarContainer, InstagramIcon, RightLogos, Logos };