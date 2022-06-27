const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lcmaximum:LwnKwlV1CLg7dzdU@cluster0.cya4k.mongodb.net/?retryWrites=true&w=majority');

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});