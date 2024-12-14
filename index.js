const express= require('express');
const app= express();
const port =3000;
app.listen(port,function(err){
    if(err){
        console.log("error running server : ",err);
        return;
    }
    console.log('server running succesfully on port : ',port);
})
