import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
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