import { useState } from 'react'
import axios from 'axios'
import '../styles/CreateStory.css'
import { useNavigate } from 'react-router-dom'

const CreateStory = ({ stories, setStories }) => {
    const [newStory, setNewStory] = useState({
        title: '',
        image: '',
        park: '',
        date: '',
        content: '',
    })

    let navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewStory((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post('/app/stories/create', newStory)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.error(error)
            })
        navigate('/app')
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
                value={newStory.title}
            />
            <label htmlFor='image'>Image URL:</label>
            <input
                type='file'
                className='createStory-input'
                name='image'
                id='image'
                onChange={handleChange}
                value={newStory.image}
            />
            <label htmlFor='park'>Park Name:</label>
            <input
                type='text'
                className='createStory-input'
                name='park'
                id='park'
                onChange={handleChange}
                value={newStory.park}
            />
            <label htmlFor='date'>Date of Event:</label>
            <input
                type='text'
                className='createStory-input'
                name='date'
                id='date'
                onChange={handleChange}
                value={newStory.date}
            />
            <label htmlFor='content'>Share Story:</label>
            <textarea
                id='content'
                className='createStory-textarea'
                name='content'
                cols='30'
                rows='10'
                onChange={handleChange}
                value={newStory.content}></textarea>
            <button className='btn' type='submit'>
                Add Story
            </button>
        </form>
    )

}

export default CreateStory
