const mongoose=require('mongoose');
  mongoose.connect("mongodb://localhost/codial");
  const db= mongoose.connection;
  db.on('error',function(){
    console.error('error connecting to db');
});
db.once('open',function(){
    console.log('db connected succesfully');
});
