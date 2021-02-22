var express = require("express"); 
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/yelpcamp");

app.set("view engine","ejs"); 
app.use(bodyparser.urlencoded({extended: true}));

var CampSchema = new mongoose.Schema({
	name : String,
	image : String
});

var st = mongoose.model("Campground",CampSchema);

st.create({name : "Georgia" , image : "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},function(err,newly)
		 {
	if(err){
			console.log(err);
		}
	else{
		console.log(newly);
	}
});

st.create({name : "Haven" , image : "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},function(err,newly)
		 {
	if(err){
			console.log(err);
		}
	else{
		console.log(newly);
	}
});

st.create({name : "Alaska" , image : "https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGNhbXBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},function(err,newly)
		 {
	if(err){
			console.log(err);
		}
	else{
		console.log(newly);
	}
});

app.get("/",function(req,res){ 
	res.render("landing");
}); 

app.get("/campground",function(req,res){ 
	st.find({},function(err,a){
	if(err){
			console.log("Nhi hai");
		}
	else{
		res.render("campground",{a:a});
	}});
});

app.post("/campground",function(req,res){ 
	var name = req.body.name; 
	var image = req.body.image; 
	var st1 = {name,image};
	st.create(st1,function(err,newly)
		 {
	if(err){
			console.log(err);
		}
	else{
		console.log(newly);
	}
});
	res.redirect("/campground");
});

app.get("/campground/new",function(req,res){ 
	res.render("new");
});

app.get("/campground/:id",function(req,res){
	st.findById(req.params.id,function(err,b){
		if(err){
				console.log(err);
			}
		else{
			res.render("show",{b:b});
		}
	});
});

app.listen(3000,function(req,res){ 
	console.log("Server has Started..."); 
});