const express = require('express');
const router=express.Router();
const homecontroller= require('../controllers/home_Controller');
console.log('in routes');
router.use('/users',require('./users'));

router.get('/home',homecontroller.home);






module.exports=router;