const express =require('express');
const router= express.Router();
const passport = require('../config/passport-local-straegy');
const postcontroller = require('../controllers/post_Controller');
const homecontroller = require('../controllers/home_Controller');
const commentcontroller = require('../controllers/comment_Controller');

router.post('/createcomment/:postid/:userid',passport.checkAuthenticated,commentcontroller.createcomment);
module.exports = router;