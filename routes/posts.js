const express =require('express');
const router= express.Router();
const postcontroller = require('../controllers/post_Controller');
const homecontroller = require('../controllers/home_Controller');
router.post('/createpost',postcontroller.createpost);

module.exports = router;