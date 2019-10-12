var express = require("express");
var app = express();
app.use(express.static("css"));
app.set("view engine", "ejs");
app.get("/", function(req, res){
	res.render("intropage");
})
app.get("/homepage", function(req, res){
	res.render("homepage");
})
app.get("/login", function(req, res){
	res.render("login");
})
app.get("/signup", function(req, res){
	res.render("signup");
})

app.listen(3000, function(){
	console.log("server started");
})