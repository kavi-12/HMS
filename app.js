var express = require("express"),
	bodyparser = require("body-parser");



var data =[
	{
		B1001:{
			room:"",
			name:"",
			username: "",
			roll:"",
			email:"",
			password:""
		},
		B1002:{
			room:"",
			name:"",
			username: "",
			roll:"",
			email:"",
			password:""
		},
		B1003:{
			room:"",
			name:"",
			username: "",
			roll:"",
			email:"",
			password:""
		},
		B1004:{
			room:"",
			name:"",
			username: "",
			roll:"",
			email:"",
			password:""
		},
		B1005:{
			room:"",
			name:"",
			username: "",
			roll:"",
			email:"",
			password:""
		},
		B1006:{
			room:"",
			name:"",
			username: "",
			roll:"",
			email:"",
			password:""
		},
		B1007:{
			room:"",
			name:"",
			username: "",
			roll:"",
			email:"",
			password:""
		},
		B1008:{
			room:"",
			name:"",
			username: "",
			roll:"",
			email:"",
			password:""
		},
		B1009:{
			room:"",
			name:"",
			username: "",
			roll:"",
			email:"",
			password:""
		},
		B1010:{
			room:"",
			name:"",
			username: "",
			roll:"",
			email:"",
			password:""
		}
	},
	{
		B1101:{
			room:"",
			name:"",
			username: "",
			roll:"",
			email:"",
			password:""
		},
		B1102:{
			room:"",
			name:"",
			username: "",
			roll:"",
			email:"",
			password:""
		},
		B1103:{
			room:"",
			name:"",
			username: "",
			roll:"",
			email:"",
			password:""
		},
		B1104:{
			room:"",
			name:"",
			username: "",
			roll:"",
			email:"",
			password:""
		},
		B1105:{
			room:"",
			name:"",
			username: "",
			roll:"",
			email:"",
			password:""
		},
		B1106:{
			room:"",
			name:"",
			username: "",
			roll:"",
			email:"",
			password:""
		},
		B1107:{
			room:"",
			name:"",
			username: "",
			roll:"",
			email:"",
			password:""
		},
		B1108:{
			room:"",
			name:"",
			username: "",
			roll:"",
			email:"",
			password:""
		},
		B1109:{
			room:"",
			name:"",
			username: "",
			roll:"",
			email:"",
			password:""
		},
		B1110:{
			room:"",
			name:"",
			username: "",
			roll:"",
			email:"",
			password:""
		}
	}
];

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("css"));
app.set("view engine", "ejs");

//routes
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

app.post("/hostelenrol", function(req, res){
	var floor = req.body.floor;
	var room = req.body.room;
	// var obj = data[floor].room;
	// console.log(data[0][room]['name']);
	// console.log(room);
	if(data[floor][room]['name'] == ""){
		data[floor][room]['name'].value() = req.body.name;
		data[floor][room]['roll'].value() = req.body.roll;
		data[floor][room]['email'].value() = req.body.email;
		data[floor][room]['room'].value() = req.body.room;
		data[floor][room]['username'].value() = req.body.username;
		data[floor][room]['password'].value() = req.body.password;

	}
	else{
		res.send("This room is already taken");
	}
})
app.listen(3000, function(){
	console.log("server started");
})