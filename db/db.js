
// const pg = require('pg');
// require('dotenv').config();

// exports.pool = pg.Pool ({
//   host: process.env.ENV_HOST,
//   databese: process.env.ENV_DB,
//   user: process.env.ENV_USER,
//   port: 5432,
//   password: process.env.ENV_PASSWORD,
// });

// const { Client } = require('pg')
// const client = new Client({
//     user: 'postgres',
//     host: '192.168.2.103',
//     database: 'realtime_sns_db',
//     password: '',
//     port: 5432,
// })
// client.connect()
// client.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     client.end()
// })


const pg = require('pg');
require('dotenv').config();

exports.pool = pg.Pool ({
    host: process.env.ENV_HOST,
    databese: process.env.ENV_DATABASE,
    user: process.env.ENV_USER,
    port: process.env.ENV_PORT,
    password: process.env.ENV_PASSWORD,
});
// client.connect()
// client.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     client.end()
// })