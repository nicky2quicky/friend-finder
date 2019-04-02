var path = require("path");
module.exports = function(app) {
    // GET ROUTE TO SURVERY
    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    }); 
    // DEFAULT ROUTE TO HOME
    app.use(function(req,res){
        res.sendFile(path.join(__dirname + "/../public/home.html")); 
    });
    // GET ROUTE TO CHARACTERS
    app.get("/characters", function(req,res){
        res.sendFile(path.join(__dirname + "/../public/characters.html"));
    }); 
}