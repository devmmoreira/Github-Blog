import { differenceInDays } from 'date-fns'
import { Container, Content, Header } from "./style"

interface PostCardProps{
    title: string
    number: string
    updatedAt: Date
    description: string
}

export const PostCard: React.FC<PostCardProps> = ({
    description,
    number,
    title,
    updatedAt
}) => {

    const postDays = differenceInDays(updatedAt, new Date())

    const getShortDescription = (description: string) => {
        if(description.length > 200){
            return `${description.substring(0, 200)}...`
        } else {
            return description
        }
    }

    return(
        <Container to={`/post/${number}`}>
            <Header>
                <h1>{ title }</h1>
                <span>{`Há ${ postDays } ${ postDays > 1 ? "dias" : "dia" }`}</span>
            </Header>
            <Content>
                <p>{ getShortDescription(description) }</p>
            </Content>
        </Container>
    )
}