import { Container, Content, Header } from "./style"

export const PostCard: React.FC = () => {
    return(
        <Container to={`/post/${"javaScript-data-types-and-data-structures"}`}>
            <Header>
                <h1>JavaScript data types and data structures</h1>
                <span>Há 1 dia</span>
            </Header>
            <Content>
                <p>Programming languages all have built-in data structures, 
                but these often differ from one language to another. 
                This article attempts to list the built-in data structures 
                available in...</p>
            </Content>
        </Container>
    )
}