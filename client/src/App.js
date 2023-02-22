import "./App.css"
import axios from "axios"
import Home from "./components/Home"
import About from "./components/About"
import Story from "./components/Story"
import NavBar from "./components/NavBar"
import ViewComments from "./components/ViewComments"
import CreateStory from "./components/CreateStory"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

const App = () => {
  let navigate = useNavigate()

  const [stories, setStories] = useState([])

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home stories={stories} setStories={setStories} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/createstory"
            element={<CreateStory stories={stories} setStories={setStories} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
