const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
});

// if password, connection: 'postgresql://dunder_mifflin:password-here@localhost/knex-practice',

// Checks with node ./src/practice.js in console console.log('knex and driver installed correctly');

// const q1 = knexInstance.from('amazong_products').select('*').toQuery();
// const q2 = knexInstance.from('amazong_products').select('*').toQuery();

// // toQuery() used for debugging and building query

// console.log('q1:', q1);

// console.log('q2:', q2);

// utilizes .then() promise method to perform the query
knexInstance
  .from('amazong_products')
  .select('*')
  .then((result) => {
    console.log(result);
  });
