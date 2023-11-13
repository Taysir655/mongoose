const express = require("express");
const app = express();
const PORT = 5000; // Setting the port number for the server
const mongoose = require("mongoose"); //link server to database

// Using middleware to parse incoming JSON data
app.use(express.json());


// connect database 
mongoose
  .connect(
    "mongodb+srv://user:user@cluster0.vzbvr74.mongodb.net/wsMongoose?retryWrites=true&w=majority"
  )
  .then(() => console.log("database connected"))
  .catch((err) => {
    if (err) throw err;
  });

  // routes
app.use("/api", require("./routes/contactRoutes"));

// create server 
app.listen(PORT, () => console.log("listening on port", PORT));
