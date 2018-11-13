var args = process.argv.slice(2);
var userInput = args[0];

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

knex.select('*').from('famous_people')
.where({first_name: userInput})
.then((rows) => { for (row of rows)
{ console.log(`${row['id']}: ${row['first_name']} ${row['last_name']} ${row['birthdate'] }`);}})
.catch((err) => { console.log( err); throw err })
.finally(() => { knex.destroy();});