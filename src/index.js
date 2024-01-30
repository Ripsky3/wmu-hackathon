const express = require("express");
const app = express();
const path = require("path");
var bodyParser = require('body-parser')
require("./db/mongoose");

const { userRouter } = require("./routes/user");

// Set path
const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Use routers
app.use(userRouter);

const port = process.env.PORT || 3000; 

app.listen(port, () => {
    console.log("We are listening at port: " + port);
})

