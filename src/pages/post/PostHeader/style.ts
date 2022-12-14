import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    border-radius: 10px;
    padding: 32px;
    background-color: ${ props => props.theme['base-profile'] };
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
        color: ${ props => props.theme["base-title"] };
    }
`

export const Link = styled.a`
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
`

export const PostInfo = styled.div`
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
`