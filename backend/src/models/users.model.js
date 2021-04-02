const sql = require("../../mysql.js");

const User = function(user) {
    this.user = user.user;
    this.password = user.password;
    this.email = user.email;
    this.rang = user.rang;
    this.role = user.role;
    this.netcoin = user.netcoin;
    this.sanctuaire = user.sanctuaire;
    this.maitre = user.maitre;
    this.secure_key = user.secure_key;
    this.banni = user.banni;
    this.raison_ban = user.raison_ban;
    this.creation_date = user.creation_date;
    this.last_connection = user.last_connection;
    this.ip_last_connection = user.ip_last_connection;
    this.compte_actif = user.compte_actif;
}

User.create = (newUser, result) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error : ", err);
            result(err, null);
            return;
        }

        console.log("user created : ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};

User.findByUser = (user, result) => {
    sql.query("SELECT * FROM users WHERE user=?", [user], (err, res) => {
        if (err) {
            console.log("error : ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Utilisateur trouvé : ", res[0]);
            result(null, res[0]);
            return;
        } else {
            result({ kind: "auncun_resultat" }, null);
        }
    });
};

User.findByUserId = (userId, result) => {
    sql.query("SELECT * FROM users WHERE id=?", [userId], (err, res) => {
        if (err) {
            console.log("error : ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Utilisateur trouvé : ", res[0]);
            result(null, res[0]);
            return;
        } else {
            result({ kind: "auncun_resultat" }, null);
        }
    });
};

User.getAllUsers = result => {
    sql.query("SELECT * FROM users", (err, res) => {
        if (err) {
            console.log("error : ", err);
            result(null, err);
            return;
        } else {
            console.log("Utilisateurs : ", res);
            result(null, res);
            return;
        }
    });
};

User.updateById = (id, user, result) => {
    sql.query("UPDATE users SET password=?, email=?, rang=? WHERE id=?", [user.password, user.email, user.rang, id], (err, res) => {
        if (err) {
            console.log("error : ", err);
            result(null, err);
            return;
        } else {
            console.log("Utilisateur updated : ", res);
            result(null, res);
        }
    });
};

module.exports = User;