const CreateStory = (props) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        onChange={handleChange}
        value={formState.title}
      />
      <label htmlFor="image">Image URL:</label>
      <input
        type="text"
        id="image"
        onChange={handleChange}
        value={formState.image}
      />
      <label htmlFor="park">Park Name:</label>
      <input
        type="text"
        id="park"
        onChange={handleChange}
        value={formState.park}
      />
      <label htmlFor="date">Date of Event:</label>
      <input
        type="text"
        id="date"
        onChange={handleChange}
        value={formState.date}
      />
      <label htmlFor="content">Share Story:</label>
      <textarea
        id="content"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={formState.content}
      ></textarea>
      <button type="submit">Add Story</button>
    </form>
  )
}

export default CreateStory
