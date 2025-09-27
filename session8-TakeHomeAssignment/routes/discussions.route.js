const express = require('express');
const router = express.Router();
const {createDiscussion, getAllDiscussions, getDiscussionByUsername,getDiscussionById} = require('../controllers/discussions.controller');
const discussionsValidate = require('../middleware/validate.middleware');
const {discussionSchema} =require('../validator/discussions.validator');
const { userAuthenticationMiddleware } = require('../middleware/user.authentication.middleware');

//Will add all paths

router.post('/new',discussionsValidate(discussionSchema),createDiscussion);
//to get all the discussion validate the auth key
router.get("/all",userAuthenticationMiddleware,getAllDiscussions)

//to get discussion based on username 
//username is basically the authername
router.get("/user/:username",userAuthenticationMiddleware,getDiscussionByUsername);

//get by id
router.get("/id/:id",userAuthenticationMiddleware,getDiscussionById);
module.exports = router;