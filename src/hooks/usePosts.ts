import { useContext } from "react"
import { PostsContext } from "../context/posts"

export const usePosts = () => {
    const context = useContext(PostsContext)

    if(!context){
        throw new Error("The hooks 'usePosts' must be used inside a 'PostsProvider'")
    }

    return context
}