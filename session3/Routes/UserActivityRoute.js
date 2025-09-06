const express = require('express');
const router = express.Router();
const { UserData, UserByGender, UserByName } = require('../Controllers/UserActivityResponse');

// router.get('/api/v1/users', UserData);
// router.get('/api/v1/users/search', UserByGender);
// router.get('/api/v1/users/:firstName', UserByName);

// since /api/v1/users  this is common in all the above routes we can also do it like this
router.get('/', UserData);
router.get('/search', UserByGender);
router.get('/:firstName', UserByName);

// and in index.js we will use it like this
// server.use('/api/v1/users', UserActivityRoute);

module.exports = router;