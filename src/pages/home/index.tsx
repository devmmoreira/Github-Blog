import { PostCard } from "./components/PostCard"
import { PresentationCard } from "./components/PresentationCard"
import { Container, PostsContainer, SearchInput, SearchPost } from "./style"

export const Home: React.FC = () => {
    return (
        <Container>
            <PresentationCard />
            <SearchPost>
                <h1>Publicações</h1>
                <p>6 publicações</p>
                <SearchInput name="search" type="text" placeholder="Buscar conteúdo"/>
            </SearchPost>
            <PostsContainer>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </PostsContainer>
        </Container>
    )
}