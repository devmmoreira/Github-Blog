import styled from "styled-components";
import HeaderImage from '../../assets/bg.png'

export const Container = styled.div`
    width: 100%;
    height: 296px;
    background-image: url(${ HeaderImage });
    background-repeat: no-repeat;
    background-size: 100% 100%;
`

export const AppHeader = styled.header`
    width: 100%;
    height: calc(100% - 68px);
    max-width: 908px;
    padding: 0 22px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`