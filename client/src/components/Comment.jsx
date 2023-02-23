import { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/Comment.css'

const Comment = (props) => {
    const [comments, setComments] = useState([])
    const getComments = async () => {
        const res = await axios.get(`/app/comments/story/${props.id}`)
        setComments(res.data.comment)
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <div>
            {comments.map((comment) => (
                <div className='comment-text' key={comment._id}>
                    <p>
                        <br />
                        username: {comment.username}
                        <br />
                        {comment.content}
                        <br />
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Comment
