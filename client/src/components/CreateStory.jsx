import { useState } from "react"
import axios from "axios"

const CreateStory = ({ stories, setStories }) => {
  const [newStory, setNewStory] = useState({
    title: "",
    image: "",
    park: "",
    date: "",
    content: "",
  })

  const handleChange = (e) => {
    setNewStory({ ...newStory, [e.target.id]: e.target.value })
  }

  const createStory = async (e) => {
    e.preventDefault()
    let res = await axios.post("http://localhost:3001/stories/create", newStory)
    let currentStories = stories
    currentStories.push(res.data.story)
    setStories(currentStories)
    setNewStory({
      title: "",
      image: "",
      park: "",
      date: "",
      content: "",
    })
  }

  const handleSubmit = (e) => {
    createStory(e)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        onChange={handleChange}
        value={newStory.title}
      />
      <label htmlFor="image">Image URL:</label>
      <input
        type="text"
        id="image"
        onChange={handleChange}
        value={newStory.image}
      />
      <label htmlFor="park">Park Name:</label>
      <input
        type="text"
        id="park"
        onChange={handleChange}
        value={newStory.park}
      />
      <label htmlFor="date">Date of Event:</label>
      <input
        type="text"
        id="date"
        onChange={handleChange}
        value={newStory.date}
      />
      <label htmlFor="content">Share Story:</label>
      <textarea
        id="content"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={newStory.content}
      ></textarea>
      <button type="submit">Add Story</button>
    </form>
  )
}

export default CreateStory
