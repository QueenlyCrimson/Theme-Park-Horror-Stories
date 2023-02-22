import { useState, useEffect } from 'react'
import axios from 'axios'

const Comment = (props) => {
    const getComments = async () => {
        const [comments, setComments] = useState([])

        const res = await axios.get(
            `http://localhost:3001/comments/story/${props.id}`
        )
        console.log(res.data)
        setComments(res.data)
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
                        Name: {comment.name}
                        <br />
                        Comment:{comment.comment}
                        <br />
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Comment
