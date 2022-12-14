import { usePosts } from "../../hooks/usePosts"

import { PostCard } from "./components/PostCard"
import { PresentationCard } from "./components/PresentationCard"

import { Container, PostsContainer, SearchInput, SearchPost } from "./style"

export const Home: React.FC = () => {
    const { posts } = usePosts()

    return (
        <Container>
            <PresentationCard />
            <SearchPost>
                <h1>Publicações</h1>
                <p>6 publicações</p>
                <SearchInput name="search" type="text" placeholder="Buscar conteúdo"/>
            </SearchPost>
            <PostsContainer>
                { posts.map(post => (
                    <PostCard 
                        key={ post.id }
                        description={ post.body }
                        number={ post.number }
                        updatedAt={ post.updated_at }
                        title={ post.title }
                    />
                )) }
            </PostsContainer>
        </Container>
    )
}