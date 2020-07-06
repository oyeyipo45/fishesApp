const { Client } = require('pg');
const client = new Client({
    // connectionString: 'postgresql://localhost/fishes-app'
    
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password:process.env.PASSWORD,
    port: process.env.PORT
});


client.connect();

module.exports = client;