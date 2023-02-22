import { useState, useEffect } from 'react'
import axios from 'axios'

const Comment = (props) => {
    const [comments, setComments] = useState([])
    const getComments = async () => {
        const res = await axios.get(
            `http://localhost:3001/comments/story/${props.id}`
        )
        console.log(res.data.comment)
        setComments(res.data.comment)
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <div>
            {comments.map((comment) => (
                <div key={comment._id}>
                    <p>
                        <br />
                        username: {comment.username}
                        <br />
                        content:{comment.content}
                        <br />
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Comment
