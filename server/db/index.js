const { Client } = require('pg');
require('dotenv').config()


const client = new Client({
    // connectionString: 'postgresql://localhost/fishes-app'
    user: process.env.USER,
    host: process.env.LOCALHOST,
    database: process.env.DATABASE_NAME,
    password: process.env.PASSWORD,
    port: process.env.PORT
});



client.connect();

module.exports = client;