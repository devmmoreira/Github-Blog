import { Container, Description, Details, Link, ProfileImage, ProfileInfo } from "./style"
import { Buildings, Users, ArrowSquareOut } from 'phosphor-react'

import Avatar from '../../../../assets/avatar.png'
import Github from '../../../../assets/github.svg'

export const PresentationCard: React.FC = () => {
    return (
        <Container>
            <ProfileImage src={ Avatar } alt="avatar"/>
            <ProfileInfo>
                <Description>
                    <h1>Cameron Williamson</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis 
                    elementum quam, ut accumsan lacus fringilla id. In congue felis felis. 
                    Suspendisse finibus, leo quis blandit molestie</p>
                </Description>
                <Link>
                    GITHUB
                    <ArrowSquareOut weight="fill"/>
                </Link>
                <Details>
                    <label>
                        <img src={ Github } alt="avatar"/>
                        <span>cameronwll</span>
                    </label>
                    <label>
                        <Buildings weight="fill"/>
                        <span>Rocketseat</span>
                    </label>
                    <label>
                        <Users weight="fill"/>
                        <span>32 seguidores</span>
                    </label>
                </Details>
            </ProfileInfo>
        </Container>
    )
}