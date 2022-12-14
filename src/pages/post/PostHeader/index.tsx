import { ArrowLeft, ArrowSquareOut, Calendar, ChatCircle } from "phosphor-react"
import { Container, Content, Link, Nav, PostInfo } from "./style"

import Github from '../../../assets/github.svg'
import { NavLink } from "react-router-dom"

export const PostHeader: React.FC = () => {
    return (
        <Container>
            <Nav>
                <NavLink to="/">
                    <Link><ArrowLeft /> Voltar</Link>
                </NavLink>
                <Link>
                    Ver no Github 
                    <ArrowSquareOut weight="fill"/>
                </Link>
            </Nav>
            <Content>
                <h1>JavaScript data types and data structures</h1>
                <PostInfo>
                    <label>
                        <img src={ Github } alt="avatar"/>
                        <span>cameronwll</span>
                    </label>
                    <label>
                        <Calendar weight="fill"/>
                        <span>Há 1 dia</span>
                    </label>
                    <label>
                        <ChatCircle weight="fill"/>
                        <span>5 comentários</span>
                    </label>
                </PostInfo>
            </Content>
        </Container>
    )
}