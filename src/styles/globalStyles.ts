import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    @media (max-width: 1080px){
        html{
            font-size: 93.75%; //15px
        }
    }

    @media (max-width: 720px){
        html{
            font-size: 87.5%; //14px
        }
    }

    body{
        background-color: ${ props => props.theme["base-background"] };
    }

    body, input, textarea, button{
        font: 400 1rem "Roboto", sans-serif;
    }

    button{
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`