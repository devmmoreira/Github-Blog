import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    max-width: 416px;
    border: none;
    height: 260px;
    border-radius: 10px;
    background-color: ${props => props.theme["base-post"]};
    padding: 32px;
    cursor: pointer;
    text-align: left;

    &:active{
        transition: 200ms;
        opacity: 0.7;
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 20px;

    h1{
        flex: 1;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 160%;
        color: ${props => props.theme["base-title"]};
    }

    span{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        color: ${props => props.theme["base-span"]};
    }
`

export const Content = styled.div`
    width: 100%;
    
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        color: ${props => props.theme["base-text"]};
    }
`