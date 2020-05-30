var express =require("express");
var bodyParser =require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static(__dirname + "/public"));

app.get("/",function(req,res){
    res.render("lecture page");
});

app.get("/1",function(req,res){
    res.render("lecture");
});
app.get("/2",function(req,res){
    res.render("lecture page");
});
app.get("/3",function(req,res){
    res.render("lecture page");
});
app.get("/4",function(req,res){
    res.render("lecture page");
});
app.get("/5",function(req,res){
    res.render("lecture page");
});


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Connected");
});