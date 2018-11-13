var args = process.argv.slice(2);
var userInput = [args[0], args[1], args[2]];

const settings = require("./settings");
var knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

var pg = require('knex')({client: 'pg'});

let userInput = { first_name: userInput[0], last_name: userInput[1], birthdate: userInput[2]};

knex('famous_people')
.insert(userInput).then(() => console.log("data inserted"))
.catch((err) => { console.log( err); throw err })
.finally(() => { knex.destroy();});