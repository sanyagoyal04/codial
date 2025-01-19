const express= require('express');

const app= express();
const port =3000;
const db= require('./config/mongoose');
const session =require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-straegy');
const cookieparser = require('cookie-parser');
const MongoDbStore = require('connect-mongodb-session')(session);
const expresslayouts= require('express-ejs-layouts');

app.use(express.urlencoded());
const store = new MongoDbStore({
uri:"mongodb://localhost/codial",
databaseName:'codial',
collection: "mySessions"
},function(err){
    console.log(err);
});
store.on('error',function(err){
    console.log('error',err);
})

//app.use(cookieparser());

app.set('view engine','ejs');
app.set('views','./views');
app.use(expresslayouts);

app.use(session({
    name:'codial', 
    secret:'blah',
    store:store ,
    saveUninitialized:false,
    resave : false,
    cookie : {
        maxAge : (1000*60*60)
    }
}));
//app.use(passport.authenticate('session'));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/',require('./routes'));



app.listen(port,function(err){
    if(err){
        console.log("error running server : ",err);
        return;
    }
    console.log('server running succesfully on port : ',port);
})
