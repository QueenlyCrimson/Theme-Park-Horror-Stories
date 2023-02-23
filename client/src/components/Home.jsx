import { useEffect } from 'react'
import axios from 'axios'
import StoryTitle from './StoryTitle'
import '../styles/Home.css'

const Home = ({ stories, setStories }) => {
    const getAllStories = async () => {
        const res = await axios.get('/app/stories')
        setStories(res.data.stories)
    }

    useEffect(() => {
        getAllStories()
    }, [])

    return (
        <div className='Home'>
            <div className='display-stories' key='{stories._id}'>
                {stories.map((story) => (
                    <StoryTitle
                        id={story._id}
                        title={story.title}
                        image={story.image}
                        park={story.park}
                        date={story.date}
                        content={story.content}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
