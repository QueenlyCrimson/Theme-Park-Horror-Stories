import { useState, useEffect } from 'react'

const getComments = async () => {
    const [comments, setComments] = useState([])

    const res = await axios.get(
        `http://localhost:3001/comments/story/${stories_id}`
    )
    console.log(res.data)
}

useEffect(() => {
    getComments()
}, [])

const Comment = (props) => {
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
