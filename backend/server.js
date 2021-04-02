require("./mysql");

const express = require("express");

const users = require('./src/routes/users.routes');

const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

app.use(morgan('combined')); 
app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
        extended: true
    }));
app.listen(port, () => console.log('Server app listening on port ' + port));

// call api route
app.use(users);