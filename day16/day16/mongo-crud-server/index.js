const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

// INITIAL CONFIG
//-------------------------------------------
let app = express();
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

// DOCUMENT SCHEMA
let User = mongoose.model("User", new Schema({
    id:ObjectId,
    username : { type : String, unique : true },
    usermail : String,
    usercity : String
}));
mongoose.Promise = global.Promise;

//CONNECTION
// let uri = "mongodb://127.0.0.1:27017/ibmdb";
let uri = "mongodb://localhost/ibmdb";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true } ).then(
    () => { console.log("Database is now 'Connected'")},
    (error) => { console.log("Error : ", error) }
);

// CONFIGURE ROUTES
let userRoutes = express.Router();

// MIDDLEWARE
//-------------------------------------------
app.use(cors());
app.use(bodyparser.json());
app.use('/users', userRoutes);
//-------------------------------------------
// READ +++++++++++++++++++++++++++++++++++++
userRoutes.route("/").get((req, res) => {
    User.find((error, users) => {
        if(error){
            console.log("Error : ", error);
        }else{
            res.json(users);
        }
    } )
} );
// CREATE +++++++++++++++++++++++++++++++++++
userRoutes.route("/add").post((req, res) => {
    let user = new User(req.body);
    user.save().then( dbres => {
        res.status(200);
        res.json( { 'message' : "User was added to the Database"} )
    }).catch( error =>{
         if(error.code === 11000){
             res.json({"User Exists": "User by that name is already existing"})
         }else{
            res.status(400);
            console.log(error);
            res.json({ 'error' : 'user was not saved because : '+error })
         }
    })
})
// DELETE
userRoutes.route("/delete/:id").delete((req, res) => {
    User.findByIdAndDelete({ _id : req.params.id }, function(error, deleteduser){
        if(error){
            res.json({"Error ": error});
        }else{
            res.json({"deleted ": deleteduser });
        }
    });
})
// UPDATE
userRoutes.route("/edit/:id").get((req, res) => {
    User.findById(req.params.id, function(error, user){
        if(error){
            res.json({"Error ": error});
        }else{
            res.json(user);
        }
    })
})
// UPDATE
userRoutes.route("/edit/:id").post((req, res) => {
    User.findById(req.params.id, function(error, user){
        if(error){
            res.json({"Error ": error});
        }else{
            // res.json(user);
            user.username = req.body.username;
            user.usermail = req.body.usermail;
            user.usercity = req.body.usercity;
            user.save().then( 
                (user) => {
                    res.json({ "updated":"Updated "+user });
                },
                (error) => {
                    res.json({"Error ": error});
                }
                 )

        }
    })
})
//-------------------------------------------

// START WEB SERVER
//-------------------------------------------
app.listen(5050, "localhost", function(error){
    if(error){
        console.log(error)
    }else{
        console.log("Server is now live on localhost:5050")
    }
})