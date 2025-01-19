const express = require('express');
const router=express.Router();
const passport = require('../config/passport-local-straegy');
const homecontroller= require('../controllers/home_Controller');
console.log('in routes');
router.use(express.urlencoded());
router.use('/users',require('./users'));

router.get('/home',homecontroller.home);
router.get('/loginpage',passport.checkAuthenticated,homecontroller.profilepage);
router.get('/signup',passport.checkAuthenticated,homecontroller.signup);

router.get('/profilepage',passport.checkAuthenticated,homecontroller.profilepage);



module.exports=router;