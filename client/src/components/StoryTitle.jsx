import { useNavigate } from 'react-router-dom'

const StoryTitle = (props) => {
    let navigate = useNavigate()

    const handleClick = () => {
        navigate(`/app/viewstory/${props.id}`)
    }

    return (
        <div className='story-title' key='${props.id}'>
            {props.title}
            <img className='story-image' src={props.image}></img>
            <button className='btn' onClick={() => handleClick()} id={props.id}>
                View Story
            </button>
        </div>
    )
}

export default StoryTitle
