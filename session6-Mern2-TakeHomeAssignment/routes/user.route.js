const express = require("express");
const router = express.Router();
const { createUser, getAllUser, getUserName } = require("../controllers/user.controller");
const {userAuthenticationMiddleware} = require("../middleware/user.authentication.middleware");

router.post('/register', createUser);
router.get('/all',userAuthenticationMiddleware, getAllUser);
router.get('/:username',userAuthenticationMiddleware, getUserName);

module.exports = router;

