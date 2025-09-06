const express = require('express');
const { HomeController } = require('../Controllers/HomeResponse');
const router = express.Router();

router.get('/',HomeController);
router.get('/home',HomeController); 
router.get('/about',AboutController);

module.exports = router;