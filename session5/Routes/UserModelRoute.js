const express =  require('express');
const router = express.Router();
const {createUser} = require('../Controllers/UserModelActivity');

// Route to create a new user
router.post('/createUser',createUser);

module.exports = router;