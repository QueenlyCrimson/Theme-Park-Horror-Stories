import "./App.css"
import axios from "axios"
import Home from "./components/Home"
import About from "./components/About"
import Story from "./components/Story"
import ViewStory from "./components/ViewStory"
import CreateStory from "./components/CreateStory"

const App = () => {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Routes></Routes>
      </main>
    </div>
  )
}

export default App
