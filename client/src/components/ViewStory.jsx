import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Comment from './Comment'
import '../styles/ViewStory.css'

const ViewStory = ({ stories }) => {
    let navigate = useNavigate()

    const [story, setStory] = useState({})
    const { id } = useParams()

    const getStoryById = async () => {
        const res = await axios.get(`/app/stories/${id}`)
        setStory(res.data.story)
        console.log(res.data.story)
    }

    const deleteStory = async () => {
        await axios.delete(`/app/stories/delete/${id}`)
        navigate('/app')
    }

    useEffect(() => {
        getStoryById()
    }, [])

    return (
        <div className='full-story'>
            <h1>{story.title}</h1>
            <img src={story.image} />
            <h3>{story.date}</h3>
            <h3>{story.park}</h3>
            <p>{story.content}</p>
            <button className='btn' onClick={() => deleteStory()}>
                Delete Story
            </button>
            <Comment id={story._id} />
        </div>
    )
}

export default ViewStory
