import { differenceInDays } from "date-fns"
import { NavLink } from "react-router-dom"

import { ArrowLeft, ArrowSquareOut, Calendar, ChatCircle } from "phosphor-react"
import { Container, Content, Link, Nav, PostInfo } from "./style"

import Github from '../../../assets/github.svg'

interface PostHeaderProps{
    title: string
    user: string
    updatedAt: Date
    comments: number
    url: string
}

export const PostHeader: React.FC<PostHeaderProps> = ({
    comments,
    title,
    updatedAt,
    user,
    url
}) => {
    const postDays = differenceInDays(updatedAt, new Date())
    
    return (
        <Container>
            <Nav>
                <NavLink to="/">
                    <Link><ArrowLeft /> Voltar</Link>
                </NavLink>
                <Link href={ url } target="_blank">
                    Ver no Github 
                    <ArrowSquareOut weight="fill"/>
                </Link>
            </Nav>
            <Content>
                <h1>{ title }</h1>
                <PostInfo>
                    <label>
                        <img src={ Github } alt="avatar"/>
                        <span>{ user }</span>
                    </label>
                    <label>
                        <Calendar weight="fill"/>
                        <span>{`Há ${ postDays } ${ postDays > 1 ? "dias" : "dia" }`}</span>
                    </label>
                    <label>
                        <ChatCircle weight="fill"/>
                        <span>{`${ comments } ${ comments > 1 ? "comentários" : "comentário" }`}</span>
                    </label>
                </PostInfo>
            </Content>
        </Container>
    )
}