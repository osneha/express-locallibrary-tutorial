// File: ./models/somemodel.js

//Require Mongoose
let mongoose = require('mongoose');

//Define a schema
let Schema = mongoose.Schema;

let SomeModelSchema = new Schema({
  a_string          : String,
  a_date            : Date,
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('SomeModel', SomeModelSchema );