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
    color: ${props => props.theme['base-text']};

    h1, h2, h3, h4, h5, h6{
        font-style: normal;
        font-weight: 700;
        color: ${props => props.theme['base-title']};
        margin-top: 18px;
        margin-bottom: 8px;
    }

    p, span, a{
        font-style: normal;
        font-size: 16px;
        line-height: 160%;
        color: ${props => props.theme['base-text']};
        margin: 8px 0px;
    }

    pre{
        width: 100%;
        display: block;
        overflow: auto;
        padding: 16px;
        background-color: ${ props => props.theme['base-post'] };
        border-radius: 2px;
        margin: 16px 0px;
    }

    a{
        color: ${props => props.theme['blue']};
        text-decoration: underline;
    }

    table{
        width: 100%;
        display: block;
        margin: 12px 0px;
        border-collapse: collapse;

        thead{
            background-color: ${ props => props.theme['base-profile'] };
        }

        tbody{
            background-color: ${ props => props.theme['base-post'] };
        }

        tr, td, th{
            border: 1px solid #fff;
        }

        td, th{
            padding: 6px 12px;
        }
    }

    li{
        list-style-type: none;
    }
`