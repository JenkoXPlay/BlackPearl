const mysql = require('mysql');
const dbConfig = require('./config/db.config');

// modifier les creds et mettre dans un fichier env
const db = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.user,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

db.connect(function(err) {
    if (err) throw err;
    console.log("MySQL connected !");
});