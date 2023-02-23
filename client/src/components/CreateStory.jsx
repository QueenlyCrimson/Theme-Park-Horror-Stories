import { useState } from 'react'
import axios from 'axios'
import '../styles/CreateStory.css'
import { useNavigate } from 'react-router-dom'

const CreateStory = () => {
    const navigate = useNavigate()
    const initialState = {
        title: '',
        image: '',
        park: '',
        date: '',
        content: '',
    }

    const [formState, setFormState] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('/app/stories/create', formState)
        setFormState(initialState)
        navigate('/')
    }

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value })
    }

    return (
        <form className='createStory-container' onSubmit={handleSubmit}>
            <label className='createStory-label' htmlFor='title'>
                Title:
            </label>
            <input
                className='createStory-input'
                type='text'
                name='title'
                id='title'
                onChange={handleChange}
                value={formState.title}
            />
            <label htmlFor='image'>Image URL:</label>
            <input
                type='file'
                className='createStory-input'
                name='image'
                id='image'
                onChange={handleChange}
                value={formState.image}
            />
            <label htmlFor='park'>Park Name:</label>
            <input
                type='text'
                className='createStory-input'
                name='park'
                id='park'
                onChange={handleChange}
                value={formState.park}
            />
            <label htmlFor='date'>Date of Event:</label>
            <input
                type='text'
                className='createStory-input'
                name='date'
                id='date'
                onChange={handleChange}
                value={formState.date}
            />
            <label htmlFor='content'>Share Story:</label>
            <textarea
                id='content'
                className='createStory-textarea'
                name='content'
                cols='30'
                rows='10'
                onChange={handleChange}
                value={formState.content}></textarea>
            <button className='btn' type='submit'>
                Add Story
            </button>
        </form>
    )
}

export default CreateStory
