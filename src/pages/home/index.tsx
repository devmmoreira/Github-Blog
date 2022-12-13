import { PresentationCard } from "./components/PresentationCard"
import { Container, SearchInput, SearchPost } from "./style"

export const Home: React.FC = () => {
    return (
        <Container>
            <PresentationCard />
            <SearchPost>
                <h1>Publicações</h1>
                <p>6 publicações</p>
                <SearchInput name="search" type="text" placeholder="Buscar conteúdo"/>
            </SearchPost>
        </Container>
    )
}