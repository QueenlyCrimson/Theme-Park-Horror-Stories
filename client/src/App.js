import './App.css'
import axios from 'axios'
import Home from './components/Home'
import About from './components/About'
import StoryTitle from './components/StoryTitle'
import ViewStory from './components/ViewStory'
import NavBar from './components/NavBar'
import CreateStory from './components/CreateStory'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const App = () => {
    let navigate = useNavigate()

    const [stories, setStories] = useState([])

    return (
        <div className='App'>
            <header>
                <NavBar />
            </header>
            <main>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Home stories={stories} setStories={setStories} />
                        }
                    />
                    <Route path='/about' element={<About />} />
                    <Route
                        path='/app/createstory'
                        element={
                            <CreateStory
                                stories={stories}
                                setStories={setStories}
                            />
                        }
                    />
                    <Route
                        path='/app/viewstory/:id'
                        element={<ViewStory stories={stories} />}
                    />
                </Routes>
            </main>
        </div>
    )
}

export default App
