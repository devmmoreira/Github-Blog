import { useState } from "react"
import { usePosts } from "../../hooks/usePosts"

import { PostCard } from "./components/PostCard"
import { PresentationCard } from "./components/PresentationCard"

import { MagnifyingGlass } from 'phosphor-react'

import { Container, InputButton, InputGroup, LoadingContainer, PostsContainer, SearchInput, SearchPost } from "./style"
import { toast } from "react-toastify"

export const Home: React.FC = () => {
    const { posts, searchPost, isFetching, loadPosts } = usePosts()

    const [searchField, setSearchField] = useState<string>("")

    const handleSearch = async() => {
        if(!searchField){
            loadPosts()
            return
        }

        try {
            await searchPost(searchField)
        } catch (error: any) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return (
        <Container>
            <PresentationCard />
            <SearchPost>
                <h1>Publicações</h1>
                <p>{ posts.length } { posts.length > 1 ? "publicações" : "publicação"}</p>
                <InputGroup>
                    <SearchInput 
                        name="search" 
                        type="text" 
                        placeholder="Buscar conteúdo"
                        value={ searchField }
                        onChange={event => setSearchField(event.target.value)}
                        onBlur={ handleSearch }
                        onKeyPress={event => {
                            if (event.which === 13) {
                                event.preventDefault()
                                handleSearch()
                            }
                        }}
                    />
                    <InputButton onClick={ handleSearch }>
                        <MagnifyingGlass weight="bold" />
                    </InputButton>
                </InputGroup>
            </SearchPost>
            { isFetching ? (
                <LoadingContainer>
                    Carregando...
                </LoadingContainer>
            ): (
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
            )}
        </Container>
    )
}