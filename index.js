const express=require('express');
const app = express();
app.use(express.static(__dirname+"/public/"));
app.listen('40',function(){
    console.log("server is at 40.http://localhost:40/");
})