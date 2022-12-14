import styled from 'styled-components'
import { fade } from '../../styles/animations'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    animation: ${ fade } 250ms;
`

export const Content = styled.div`
    padding: 40px 32px;

    h1, h2, h3, h4, h5, h6{
        font-style: normal;
        font-weight: 700;
        color: ${props => props.theme['base-title']};
    }

    p, span, a{
        font-style: normal;
        font-size: 16px;
        line-height: 160%;
        color: ${props => props.theme['base-text']};
    }

    a{
        color: ${props => props.theme['blue']};
        text-decoration: underline;
    }
`