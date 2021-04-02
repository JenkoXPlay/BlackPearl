const mysql = require('mysql');
const dbConfig = require('./config/db.config.js');

// modifier les creds et mettre dans un fichier env
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("MySQL connected !");
});

module.exports = connection;