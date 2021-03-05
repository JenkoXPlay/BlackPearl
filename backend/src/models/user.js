const sql = require("../../mysql");

const User = function(user) {
    this.user = user.user;
    this.email = user.email;
    this.rang = user.rang;
}

User.create = (newUser, result) => {
    sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error : ", err);
            result(err, null);
            return;
        }

        console.log("user created : ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};