import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const ViewStory = ({ stories }) => {
  const [story, setStory] = useState({})
  const { id } = useParams()

  const getStoryById = async () => {
    const res = await axios.get(`http://localhost:3001/stories/${id}`)
    setStory(res.data.story)
    console.log(res.data.story)
  }

  useEffect(() => {
    getStoryById()
  }, [])

  return (
    <div className="full-story">
      <h1>{story.title}</h1>
      <img src={story.image} />
      <h3>{story.date}</h3>
      <h3>{story.park}</h3>
      <p>{story.content}</p>
    </div>
  )
}

export default ViewStory
