import './App.css'
import Home from './components/Home'
import About from './components/About'
import ViewStory from './components/ViewStory'
import NavBar from './components/NavBar'
import CreateStory from './components/CreateStory'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

const App = () => {
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
