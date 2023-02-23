//Schemas

const Story = require('../models/story')
const Comment = require('../models/comment')

//Controllers

const createStory = async (req, res) => {
    try {
        const story = await new Story(req.body)
        await story.save()
        return res.status(201).json({
            story,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllStories = async (req, res) => {
    try {
        const stories = await Story.find()
        return res.status(200).json({ stories })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getStoryById = async (req, res) => {
    try {
        const { id } = req.params
        const story = await Story.findById(id)
        if (story) {
            return res.status(200).json({ story })
        }
        return res
            .status(404)
            .send('Story with the specified name does not exist!')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateStory = async (req, res) => {
    try {
        const story = await Story.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        res.status(200).json(story)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteStory = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Story.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Story deleted')
        }
        throw new Error('Story not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createComment = async (req, res) => {
    try {
        const comment = await new Comment(req.body)
        await comment.save()
        return res.status(201).json({
            comment,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find()
        return res.status(200).json({ comments })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        )
        res.status(200).json(comment)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteComment = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Comment.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Comment deleted')
        }
        throw new Error('Comment not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getCommentsByStoryId = async (req, res) => {
    try {
        const { id } = req.params
        const comment = await Comment.find({ figure_id: `${id}` })
        if (comment) {
            return res.status(200).json({ comment })
        }
        return res
            .status(404)
            .send('Comment with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    createStory,
    getAllStories,
    getStoryById,
    updateStory,
    deleteStory,
    createComment,
    getAllComments,
    updateComment,
    deleteComment,
    getCommentsByStoryId,
}
