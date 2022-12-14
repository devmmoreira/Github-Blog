import { Container, Description, Details, Link, ProfileImage, ProfileInfo } from "./style"
import { Buildings, Users, ArrowSquareOut } from 'phosphor-react'

import Github from '../../../../assets/github.svg'
import { useEffect, useState } from "react"
import { githubApi } from "../../../../services/github"
import { toast } from "react-toastify"

interface UserInfo{
    login: string
    avatar_url: string
    html_url: string
    name: string
    bio: string
    company: string
    followers: number
}

export const PresentationCard: React.FC = () => {

    const [userInfo, setUserInfo] = useState<UserInfo>({} as UserInfo)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const getUserInfo = async() => {
            try {
                setIsLoading(true)
                const response = await githubApi.get(`/users/MarcosPotato`)

                if(response.data.message === "Not Found"){
                    return
                }

                setUserInfo(response.data)
            } catch (error: any) {
                console.log(error)
                toast.error(error.message)
                return
            } finally{
                setIsLoading(false)
            }
        }

        getUserInfo()
    },[])

    if(isLoading){ return <></> }

    return (
        <Container>
            <ProfileImage src={ userInfo.avatar_url } alt="avatar"/>
            <ProfileInfo>
                <Description>
                    <h1>{ userInfo.name }</h1>
                    <p>{ userInfo.bio }</p>
                </Description>
                <Link href={ userInfo.html_url } target="_blank">
                    GITHUB
                    <ArrowSquareOut weight="fill" />
                </Link>
                <Details>
                    <label>
                        <img src={ Github } alt="avatar"/>
                        <span>{ userInfo.login }</span>
                    </label>
                    <label>
                        <Buildings weight="fill"/>
                        <span>{ userInfo.company }</span>
                    </label>
                    <label>
                        <Users weight="fill"/>
                        <span>{ userInfo.followers } seguidores</span>
                    </label>
                </Details>
            </ProfileInfo>
        </Container>
    )
}