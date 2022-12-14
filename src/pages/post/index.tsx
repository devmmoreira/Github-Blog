import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { usePosts } from "../../hooks/usePosts"
import { PostHeader } from "./PostHeader"
import { Container, Content } from "./style"

import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import { unified } from "unified"
import rehypeStringify from "rehype-stringify"
/* import rehypeStringify from 'rehype-stringify' */

interface PostInfo{
    id: string
    number: string
    title: string
    body: string
    created_at: Date
    updated_at: Date
    html_url: string
    comments: number
    user: string
}

export const Post: React.FC = () => {
    const { postId } = useParams()
    const { isFetching, getPostDetail } = usePosts()

    const [post, setPost] = useState<PostInfo>({} as PostInfo)

    useEffect(() => {
        const getPost = async() => {
            try{
                const postInfo = await getPostDetail(postId as string)

                const postContent = await unified()
                    .use(remarkParse)
                    .use(remarkGfm)
                    .use(remarkRehype)
                    .use(rehypeStringify)
                    .process(postInfo.body)

                setPost({
                    ...postInfo,
                    body: postContent.toString()
                })
            } catch(error: any) {
                console.log(error)
            }
        }

        getPost()
    },[postId])

    return (
        <Container>
            <PostHeader 
                title={ post.title }
                comments={ post.comments }
                updatedAt={ post.updated_at }
                user={ post.user }
                url={ post.html_url }
            />
            <Content dangerouslySetInnerHTML={{ __html: post.body}}/>
        </Container>
    )
}