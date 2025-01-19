const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const Usermodel=require('../models/user');
passport.use(
new LocalStrategy({
    usernameField:'username'
}, async function(username,password,done){
try{
 var result =   await Usermodel.findOne({username:username});
}catch(err){
    console.log('error in finding user in db by username during login');
    return done(err);
}
if(!result){
    console.log('no user found with this username');
    return done(null,false);
}
if(result.password!=password){console.log('password mismatched');
    return done(null,false);
}
console.log('user authenticated');
return done(null,result);
}

    )
);

//serialize the user to decide which key is to be stored in cookie
passport.serializeUser(function(result,done){
    
        done(null,result.id);
    });
   

passport.deserializeUser(async function(id,done){
try{
    var user1 = await Usermodel.findById(id);
}catch(err){
    console.log('error in deserializing or finding user by id in db ');
    return done(err);
}
console.log('deserializing done right');
return done(null,user1);
});
passport.checkAuthenticated= function(req,res,next){
    if(req.isAuthenticated()){
        return next();

    }
    else{
        return res.redirect('/loginpage');
    }
}
passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user=req.user;
    }
    next();
}
module.exports=passport;