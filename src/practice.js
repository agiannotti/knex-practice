const knex = require('knex');
require('dotenv').config();

const db = knex({
  client: 'pg',
  // hostname: 'localhost'
  // password: ''
  // databaseName: 'c47_knex_practice
  // port: 5432 ALTERNATIVELY WHEN DEPLOYED
  // connection: protocol username:password @ domain name :port / path
  connection: process.env.DB_URL,
});

db.select('*')
  .from('amazong_products')
  .then((data) => {
    console.log(data);
  })
  // explicitly state to end process if necessary using .finally() method

  .finally(() => {
    db.destroy();
  });
