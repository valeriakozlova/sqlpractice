var args = process.argv.slice(2);
var userInput = args[0];

const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client(settings);

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query('SELECT * FROM famous_people where first_name = $1',[userInput],(err, result) => {
    console.log("Searching...");
    if (err) {
      return console.error("error running query", err);
    }
    let output = result.rows.forEach(function(element) {console.log (`- ${element.id}: ${element.first_name} ${element.last_name}, born ${element.birthdate}`)})
    client.end();
  });
});


