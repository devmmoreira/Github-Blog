import { createContext, ReactNode, useCallback, useEffect, useState } from "react"
import { githubApi } from "../services/github"

interface Post{
    id: string
    number: string
    title: string
    body: string
    created_at: Date
    updated_at: Date
}

interface DetailedPost extends Post{
    html_url: string
    comments: number
    user: string
}

interface PostsContextParams{
    posts: Post[]
    isFetching: boolean
    searchPost: (text: string) => Promise<void>
    getPostDetail: (postId: string) => Promise<DetailedPost>
}

interface PostsProviderProps{
    children: ReactNode
}

export const PostsContext = createContext({} as PostsContextParams)

export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
    const [posts, setPosts] = useState<Post[]>([])
    const [isFetching, setIsFetching] = useState<boolean>(false)
    
    const searchPost = useCallback(async(text: string): Promise<void> => {
        const searchField = text.replaceAll(" ", "%20")

        try {
            setIsFetching(true)
            const response = await githubApi.get(`/search/issues?q=${searchField}%20repo:MarcosPotato/github-blog`)

            if(response.data.total_count <= 0){
                setPosts([])
                throw new Error("Nenhum registro encontrado")
            }

            setPosts(response.data.items.map((item: any) => ({
                id: item.id,
                number: item.number,
                title: item.title,
                body: item.body,
                created_at: new Date(item.created_at),
                updated_at: new Date(item.updated_at),
            })))

        } catch (error: any) {
            throw error
        } finally{
            setIsFetching(false)
        }
    },[])

    const getPostDetail = useCallback(async(postId: string): Promise<DetailedPost>  => {
        setIsFetching(true)
        try {
            const response = await githubApi.get(`/repos/MarcosPotato/github-blog/issues/${postId}`)

            if(response.data.message === "Not Found"){
                setPosts([])
                throw new Error("Post não encontrado")
            }

            return {
                id: response.data.id,
                number: response.data.number,
                title: response.data.title,
                body: response.data.body,
                created_at: new Date(response.data.created_at),
                updated_at: new Date(response.data.updated_at),
                html_url: response.data.html_url,
                comments: response.data.comments,
                user: response.data.user.login,
            }

        } catch (error: any) {
            throw error
        } finally{
            setIsFetching(false)
        }
    },[])

    useEffect(() => {
        const getPosts = async() => {
            try {
                setIsFetching(true)
                const response = await githubApi.get(`/search/issues?q=repo:MarcosPotato/github-blog`)

                if(response.data.total_count <= 0){
                    console.log("Nenhum post encontrado")
                    return
                }

                setPosts(response.data.items.map((item: any) => ({
                    id: item.id,
                    number: item.number,
                    title: item.title,
                    body: item.body,
                    created_at: new Date(item.created_at),
                    updated_at: new Date(item.updated_at),
                })))

            } catch (error: any) {
                console.log(error)
                return
            } finally{
                setIsFetching(false)
            }
        }

        getPosts()
    },[])

    return(
        <PostsContext.Provider value={{ posts, isFetching, searchPost, getPostDetail }}>
            { children }
        </PostsContext.Provider>
    )
}