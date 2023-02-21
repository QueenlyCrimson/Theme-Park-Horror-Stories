import "./App.css"
import axios from "axios"
import Home from "./components/Home"
import About from "./components/About"
import Story from "./components/Story"
import NavBar from "./components/NavBar"
import ViewStory from "./components/ViewStory"
import CreateStory from "./components/CreateStory"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

const App = () => {
  let navigate = useNavigate()

  const [stories, setStories] = useState([])

  const getAllStories = async () => {
    const res = await axios.get("http://localhost:3001/stories")
    console.log(res)
    setStories(res.data.stories)
  }
  console.log(stories)

  useEffect(() => {
    getAllStories()
  }, [])

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/createstory" element={<CreateStory />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
