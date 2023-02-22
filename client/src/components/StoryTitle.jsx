import axios from "axios"
import { useNavigate } from "react-router-dom"

const StoryTitle = (props) => {
  let navigate = useNavigate()

  const handleClick = () => {
    navigate(`/viewstory/${props.id}`)
  }

  return (
    <div className="story-title">
      {props.title}
      <img className="story-image" src={props.image} ></img>
      <button onClick={() => handleClick()} id={props.id}>
        View Story
      </button>
    </div>
  )
}

export default StoryTitle
