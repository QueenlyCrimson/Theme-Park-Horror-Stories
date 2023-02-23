const { Router } = require('express')
const router = Router()
const storyController = require('../controllers/story')
const commentController = require('../controllers/comments')

router.get('/app', (req, res) => res.send('This is Root!'))

// post controllers

router.post('/app/stories/create', storyController.createStory)
router.post('/app/comments/create/:storyId', commentController.createComment)

// get controllers
router.get('/app/stories', storyController.getAllStories)
router.get('/app/stories/:id', storyController.getStoryById)
router.get('/app/comments', commentController.getAllComments)
router.get(
    '/app/comments/story/:storyId',
    commentController.getCommentsByStoryId
)

// delete controllers
router.delete('/app/stories/delete/:id', storyController.deleteStory)
router.delete('/app/comments/delete/:id', commentController.deleteComment)

module.exports = router
