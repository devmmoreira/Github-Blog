import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    border-radius: 10px;
    padding: 32px;
    background-color: ${ props => props.theme['base-profile'] };
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;

    @media(max-width: 700px){
        flex-direction: column !important;
    }
`

export const ProfileImage = styled.img`
    width: 148px;
    height: 148px;
    border-radius: 8px;
    object-fit: contain;

    @media(max-width: 700px){
        width: 100%;
        max-width: 300px;
        /* max-height: 300px; */
    }
`

export const ProfileInfo = styled.div`
    min-height: 148px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`

export const Description = styled.div`
    h1{
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 130%; 
        color: ${ props => props.theme['base-title'] };
        margin-bottom: 8px;
    }

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;  
        color: ${ props => props.theme['base-text'] };
    }
`

export const Details = styled.div`
    display: flex;
    flex-direction: row;
    gap: 26px;

    label{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;

        svg{
            width: 16px;
            height: 16px;
            color: ${ props => props.theme['base-label'] };
        }

        span{
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 160%;
            color: ${ props => props.theme['base-label'] };
        }
    }

    @media(max-width: 700px){
        flex-direction: column;
        gap: 6px;
        margin-top: 8px;
    }
`

export const Link = styled.a`
    position: absolute;
    right: 0px;

    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
    color: ${ props => props.theme.blue };

    display: flex;
    gap: 4px;

    cursor: pointer;

    svg{
        width: 12px;
        height: 12px;
    }

    @media(max-width: 700px){
        bottom: 0px;
    }

    @media(min-width: 700px){
        top: 0px;
    }
`