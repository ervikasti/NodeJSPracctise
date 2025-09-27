const express = require('express');
const router = express.Router();
const UserRoute = require('./user.route');
const DiscussionRoute = require('./discussions.route');
const userInputValidator = require('../middleware/user.input.validator.middleware');

router.use("/api/v1/user", userInputValidator,UserRoute);
router.use("/discussions",DiscussionRoute);

module.exports = router;