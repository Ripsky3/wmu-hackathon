const mongoose = require("mongoose");

try {
    // Connect to the MongoDB cluster
    mongoose.connect(process.env.MONGO_DB_URL);
    
    console.log("Connected to mongoose!")

  } catch (e) {
   console.log("could not connect");
}