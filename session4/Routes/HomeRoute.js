const express = require('express');
const router = express.Router();
const { HomeController,AboutController } = require('../Controllers/HomeResponse');

router.get('/',HomeController);
router.get('/home',HomeController); 
router.get('/about',AboutController);

module.exports = router;