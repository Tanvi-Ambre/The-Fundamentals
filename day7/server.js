const express = require("express");
const app = express();
app.use(express.static(__dirname));
app.get("/",function(request, response){
    response.sendFile(__dirname+"/step50-modules.html");
});
app.listen(1010,"localhost");
console.log("Server is now live on localhost:1010");