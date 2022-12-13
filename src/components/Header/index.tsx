import { AppHeader, Container } from "./style"
import Logo from '../../assets/logo.svg'

export const Header: React.FC = () => {
    return (
        <Container>
            <AppHeader>
                <img src={ Logo } alt="git-blog"/>
            </AppHeader>
        </Container>
    )
}