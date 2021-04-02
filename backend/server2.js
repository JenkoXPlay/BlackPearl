const http = require("http");
const dbMySQL = require("./mysql");

const host = 'localhost';
const port = 3000;

const requestListener = function(req, res) {
    res.writeHead(200);
    res.end("Server on !");
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

// Connexion à la DB
dbMySQL.ConnectDB;

// Importation des API MySQL
const users = require("./src/routes/users.routes.js");