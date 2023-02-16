import { useState, useEffect } from "react"
import axios from "axios"
import Story from "./Story"
import { Route } from "react-router-dom"

const Home = ({ stories, setStories }) => {
  const getAllStories = async () => {
    const res = await axios.get("http://localhost:3001/stories")
    setStories(res.data.stories)
  }

  useEffect(() => {
    getAllStories()
  }, [])

  return (
    <div className="Home">
      <div className="display-stories">
        {stories.map((story) => (
          <Story
            key={story._id}
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
