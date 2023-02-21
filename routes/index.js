const { Router } = require('express')
const router = Router()
const Controllers = require('../controllers/index')

router.get('/', (req, res) => res.send('This is Root!'))

// post controllers
router.post('/stories/create', Controllers.createStory)
router.post('/comments/create/:storyId', Controllers.createComment)

// get controllers
router.get('/stories', Controllers.getAllStories)
router.get('/stories/:id', Controllers.getStoryById)
router.get('/comments', Controllers.getAllComments)
router.get('/comments/story/:storyId', Controllers.getCommentsByStoryId)

//put controllers
router.put('/stories/update/:id', Controllers.updateStory)
router.put('/comments/update/:id', Controllers.updateComment)

// delete controllers
router.delete('/stories/delete/:id', Controllers.deleteStory)
router.delete('/comments/delete/:id', Controllers.deleteComment)

module.exports = router
