const { Router } = require('express')
const router = Router()
const storyController = require('../controllers/stories')
const commentController = require('../controllers/comments')

router.get('/', (req, res) => res.send('This is Root!'))

// post controllers
router.post('/stories/create', storyController.createStory)
router.post('/comments/create/:storyId', commentController.createComment)

// get controllers
router.get('/stories', storyController.getAllStories)
router.get('/stories/:id', storyController.getStoryById)
router.get('/comments', commentController.getAllComments)
router.get('/comments/story/:storyId', commentController.getCommentsByStoryId)

// delete controllers
router.delete('/stories/delete/:id', storyController.deleteStory)
router.delete('/comments/delete/:id', commentController.deleteComment)

module.exports = router
