// Importing the Mongoose library for MongoDB interaction
const mongoose = require("mongoose");

// Defining a Mongoose schema for the 'Contact' collection
const contactSchema = mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: {
    city: String,
    code: Number,
  },
});

// Creating a Mongoose model named 'Contact' based on the defined schema
const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
