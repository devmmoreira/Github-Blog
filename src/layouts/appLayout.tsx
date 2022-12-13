import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { AppContainer, AppContent } from './styles'

export const AppLayout: React.FC = () => (
    <AppContainer>
        <Header />
        <AppContent>
            <Outlet/>
        </AppContent>
    </AppContainer>
)