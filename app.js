var express = require("express"),
	bodyparser = require("body-parser"),
	mongoose = require("mongoose");
var str = "";
var currentuser = "";
mongoose.connect("mongodb://localhost/hostel_app");
var newuserschema = new mongoose.Schema({
	room: String,
	name: String,
	roll: String,
	username: String,
	email: String,
	password: String
})
var newuser = mongoose.model("newuser", newuserschema);


var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("css"));
app.set("view engine", "ejs");

//routes
app.get("/", function(req, res){
	res.render("intropage");
})
app.get("/homepage", function(req, res){
	currentuser = "";
	newuser.find({}, function(err, users){
		if(err)
			console.log(err)
		else{
			console.log(users)
		}
	})
	res.render("homepage");
})
app.get("/mainpage", function(req, res){
	str = "";
	res.render("main", {currentuser: currentuser})
})
app.get("/profile", function(req, res){
	newuser.find({}, function(err, user){
		if(err)
			console.log(err)
		else{
			user.forEach(function(h){
				if(h.name.toUpperCase() == currentuser){
					res.render("profile", {currentuser: currentuser, usernamelatest: h.username, rolllatest: h.roll, emaillatest: h.email, roomlatest: h.room});
				}
			})
		}
	})
})
app.get("/login", function(req, res){
	//str = "";
	currentuser = "";
	res.render("login", {str: str});
})

app.post("/login", function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	newuser.find({}, function(err, user){
		var count=0;
		user.forEach(function(h){
			if(h.username == username){
				if(h.password == password){ 
					str = "";
					currentuser += h.name;
					currentuser = currentuser.toUpperCase();
					res.redirect("/mainpage")
					count+=1;
				}
			}
		})
		if(count ==0){
			str += "Password was incorrect..try again";
			 res.redirect("/login");
		}
	})
})
app.get("/signup", function(req, res){
	currentuser="";
	res.render("signup");
})

app.post("/signup", function(req, res){
	var floor = req.body.floor;
	var room = req.body.room;
	console.log("entered post route")
	var name = req.body.name;
	var roll = req.body.roll;
	var username = req.body.username;
	var password = req.body.password;
	var email = req.body.email;
	var newcreate = {room: room, name: name, roll: roll, username: username, email: email, password: password};
	var count =0;
	newuser.find({},function(err, user){
		var count=0;
		user.forEach(function(h){
			if(h.roll == roll)
				count=1
			else if(h.room == room)
				count =2
		})
		if(count==0){
			newuser.create(newcreate, function(err, newlycreated){
				if(err)
					console.log(err)
				else
					res.redirect("/mainpage")
			})
		}
		else if(count==2){
			res.send("this room is already taken")
		}
		else if(count ==1){
			res.send("this account already exist")
		}
	})
	
})
app.listen(3000, function(){
	console.log("server started");
})