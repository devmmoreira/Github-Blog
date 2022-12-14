import styled from 'styled-components'
import { fade } from '../../styles/animations'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    animation: ${ fade } 250ms;
`

export const SearchPost = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 12px;
    margin-top: 6vh;
    margin-bottom: 48px;

    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 160%;
        color: ${ props => props.theme['base-title'] };
    }

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        color: ${ props => props.theme['base-span'] };
    }
`

export const SearchInput = styled.input`
    width: 100%;
    height: 50px;
    padding: 12px 16px;
    color: ${ props => props.theme['base-text'] };
    border-radius: 6px;
    background-color: ${ props => props.theme['base-input'] };
    border: 1px solid ${ props => props.theme['base-border'] };
    outline: none;

    &::placeholder{
        color: ${ props => props.theme['base-label'] };
    }
`

export const PostsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
    margin-bottom: 32px;
`

export const InputGroup = styled.label`
    position: relative;
    width: 100%;
`

export const InputButton = styled.button`
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${ props => props.theme['base-input'] };
    cursor: pointer;
    position: absolute;
    right: 8px;
    top: 8px;
    
    svg{
        width: 22px;
        height: 22px;
        color: ${ props => props.theme['base-text'] };
        /* pointer-events: none; */
    }

    &:hover{
        transition: 200ms;
        opacity: 0.9;
        background-color: ${ props => props.theme['base-profile'] };
    }

    &:active{
        transition: 200ms;
        opacity: 0.8;
        background-color: ${ props => props.theme['base-profile'] };
    }
`

export const LoadingContainer = styled.span`
    margin: 0 auto;
    font-weight: 700;
    font-size: 28px;
    line-height: 160%;
    color: ${ props => props.theme['blue'] };
`