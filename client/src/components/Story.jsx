const Story = (props) => {
  return (
    <div className="story-card">
      <div className="story-title">{props.title}</div>
      <div className="story-img">
        <img src={props.image} />
      </div>
      <div className="content">
        <p>{props.content}</p>
        <button>View Story</button>
      </div>
    </div>
  )
}

export default Story
