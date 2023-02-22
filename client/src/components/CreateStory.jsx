import { useState } from 'react'
import axios from 'axios'
import '../styles/CreateStory.css'

const CreateStory = ({ stories, setStories }) => {
    const [newStory, setNewStory] = useState({
        title: '',
        image: '',
        park: '',
        date: '',
        content: '',
    })

    const handleChange = (e) => {
        setNewStory({ ...newStory, [e.target.id]: e.target.value })
    }

    const createStory = async (e) => {
        e.preventDefault()
        let res = await axios.post(
            'http://localhost:3001/stories/create',
            newStory
        )
        let currentStories = stories
        currentStories.push(res.data.story)
        setStories(currentStories)
        setNewStory({
            title: '',
            image: '',
            park: '',
            date: '',
            content: '',
        })
    }

    const handleSubmit = (e) => {
        createStory(e)
    }

    return (
        <form className='createStory-container' onSubmit={handleSubmit}>
            <label className='createStory-label' htmlFor='title'>
                Title:
            </label>
            <input
                className='createStory-input'
                type='text'
                id='title'
                onChange={handleChange}
                value={newStory.title}
            />
            <label className='createStory-label' htmlFor='image'>
                Image URL:
            </label>
            <input
                className='createStory-input'
                type='file'
                id='image'
                onChange={handleChange}
                value={newStory.image}
            />
            <label className='createStory-label' htmlFor='park'>
                Park Name:
            </label>
            <input
                className='createStory-input'
                type='text'
                id='park'
                onChange={handleChange}
                value={newStory.park}
            />
            <label className='createStory-label' htmlFor='date'>
                Date of Event:
            </label>
            <input
                className='createStory-input'
                type='text'
                id='date'
                onChange={handleChange}
                value={newStory.date}
            />
            <label className='createStory-label' htmlFor='content'>
                Share Story:
            </label>
            <textarea
                className='createStory-textarea'
                id='content'
                cols='30'
                rows='10'
                onChange={handleChange}
                value={newStory.content}></textarea>
            <button className='createStory-button' type='submit'>
                Add Story
            </button>
        </form>
    )
}

export default CreateStory
