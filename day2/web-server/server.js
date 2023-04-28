var express = require("express");
var app = express();
app.use(express.static(__dirname));
app.listen(1010,"localhost",function(err){
    if(err){
        console.log("Error : ", err)
    }else{
        console.log("Server is now running on localhost:1010")
    }
});