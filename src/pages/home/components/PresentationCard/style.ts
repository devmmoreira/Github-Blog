import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 212px;
    border-radius: 10px;
    background-color: ${ props => props.theme['base-profile'] };
`