const router = require('express').Router();


const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughts-controller');

// -- Directs to: /api/thoughts <GET>
router.route('/').get(getAllThoughts);

// -- Directs to: /api/thoughts/:id <GET, PUT, DELETE>
router
.route('/:id')
.get(getThoughtsById)
.put(updateThoughts)
.delete(deleteThoughts); 

// -- Directs to: /api/thoughts/:userId <POST>
router
.route('/:userId')
.post(createThoughts);

router
.route('/:thoughtId/reactions')
.post(addReaction);

router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction); 

module.exports = router;
