var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require('method-override'),
  morgan = require('morgan'),
  db = require("./models"),
  session = require("cookie-session");
  

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(morgan('tiny'));

app.use(session({
  maxAge: 3600000,
  secret: 'iwillnevertell',
  name: "snickerdoddle"
}));


// **********User*************
app.get("/",function(req,res){

});

app.get("/login",function(req,res){

});

app.get("/signup",function(req,res){

});

// **********Post*************
// index
app.get("/posts",function(req,res){

});

// new
app.get("/post/new",function(req,res){

});

// show
app.get("/posts/show",function(req,res){

});

// create
app.post("/posts",function(req,res){

});

// update
app.get("/posts/:id/edit",function(req,res){

});

app.put("/posts/:id",function(req,res){

});

// delete
app.delete("/posts/:id",function(req,res){

});

// **********Comment*************
// index
app.get("/posts/:post_id/comments",function(req,res){

});

// new
app.get("/posts/:post_id/comments/new",function(req,res){

});

// show
app.get("/posts/:post_id/comments/show",function(req,res){

});

// create
app.post("/posts/:post_id/comments",function(req,res){

});

// update
app.get("/posts/:post_id/comments/:id/edit",function(req,res){

});

app.put("/posts/:post_id/comments/:id",function(req,res){

});

// delete
app.delete("/posts/:post_id/comments/:id",function(req,res){

});

// catch all
app.get("*",function(req,res){

});

// listening to server
app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});