import { useState, useEffect } from "react"
import axios from "axios"

const Home = ({ stories, setStories }) => {
  const getAllStories = async () => {
    const res = await axios.get("http://localhost:3001/stories")
    setStories(res.data.stories)
  }

  useEffect(() => {
    getAllStories()
  }, [])

  return <div></div>
}

export default Home
