// LOAD DATA

var friends = require("../app/data/friends.js")

// ROUTING
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  // Post for the new user's point score
  app.post("/api/friends", function(req, res) {
    
  // New User Data
    var newUser = {
      name: '',
      picture: '',
      scores: []
    };

  // New user's point array score, for loop push it the scores into the array
    var scoresArray = [];
    for (var i = 0; i < req.body.scores.length; i++) {
      scoresArray.push(parseInt(req.body.scores[i]))
    }

    newUser.scores = scoresArray;

  // Aqua Teen Character Point Score
    var charArray = [];
    for (var i = 0; i < friends.length; i++){
      var defaultScore = 0;
      for (var j =0; j < newUser.scores.length; j++){
        defaultScore += Math.abs(newUser.scores[j] - friends [i].scores[j])
      }
      charArray.push(defaultScore);
    }

    // Comparing the scores with the closest character match

    var topScore = 0;
    for (var i =1; i < charArray.length; i++){
      if (charArray[i] <= charArray[topScore]){
        topScore = i;
      }
    }

    // Creating Variable for top match and pushing it back
    var topMatch = friends[topScore];

    res.json(topMatch);
          friends.push(newUser)
  });
  }

