var db = require('./db');

module.exports.handleSignup = (email, password) => {
  // check if email already exists

  // save the user to the database
  db.saveUser({
    email: email,
    password: password
  })

  //shortcut in es6 since field names are same
  // db.saveUser({email, password});

  // Send the welcome email

};