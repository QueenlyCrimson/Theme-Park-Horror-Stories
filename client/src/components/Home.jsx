import { useState, useEffect } from "react"
import axios from "axios"
import Story from "./StoryTitle"
import { Route } from "react-router-dom"
import StoryTitle from "./StoryTitle"
import '../styles/Home.css'

const Home = ({ stories, setStories }) => {
  const getAllStories = async () => {
    const res = await axios.get("http://localhost:3001/stories")
    setStories(res.data.stories)
    console.log(res.data)
  }

  useEffect(() => {
    getAllStories()
  }, [])

  return (
    <div className="Home">
      <div className="display-stories">
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
