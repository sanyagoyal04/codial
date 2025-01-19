const express= require('express');
const router = express.Router();
const passport=require('passport');
const usercontroller = require('../controllers/user_Controller');
const homecontroller = require('../controllers/home_Controller');

router.post('/createuser',usercontroller.createUser);

router.post('/login',passport.authenticate('local',{
    failureRedirect : '/loginpage'}
),usercontroller.login);

 //router.get('/signout',usercontroller.signout);

module.exports=router;