const Story = (props) => {
  return (
    <div className="story-title">
      {props.title}
      <button>View Story</button>
    </div>
  )
}

export default Story
