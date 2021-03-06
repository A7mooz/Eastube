var express = require('express');
var app = express();

// Set port
var port = process.env.PORT || 8080

app.use(express.static(__dirname + "/public"));

// Routes

app.get("/", function(req, res) {
    res.render("index")
})

app.listen(port, function() {
    console.log("App running")
})