const express= require('express');
const app= express();
const port =3000;
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err){
    if(err){
        console.log("error running server : ",err);
        return;
    }a
    console.log('server running succesfully on port : ',port);
})
