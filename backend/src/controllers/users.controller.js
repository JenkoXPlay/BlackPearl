const Users = require("../models/users.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const security = require("../../middleware/secure_key.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Contenu vide !"
        });
    }

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const users = new Users({
                user: req.body.user,
                password: hash,
                email: req.body.email,
                rang: 3,
                role: 0,
                netcoin: 0,
                sanctuaire: 0,
                maitre: 0,
                secure_key : security.genSecureKey(50),
                banni: false,
                raison_ban: "",
                creation_date: new Date(),
                last_connection: new Date(),
                ip_last_connection: "",
                compte_actif: false
            });

            Users.create(users, (err, data) => {
                if (err) {
                    res.status(500).send({
                        message:
                            err.message || "Erreur survenue lors de la création de l'utilisateur !"
                    });
                } else {
                    res.send(data);
                }
            });
        })
        .catch(error => res.status(500).json({ error }));
}

exports.login = (req, res) => {
    console.log(req.body);
    if (!req.body) {
        res.status(400).send({
            message: "Contenu vide !"
        });
    }

    Users.findByUser(req.body.user, async (err, data) => {
        if (err) {
            if (err.kind === "auncun_resultat") {
                res.status(404).send({
                    message: "Aucun utilisateur trouvé !"
                });
            } else {
                res.status(500).send({
                    message: "Erreur survenue !"
                });
            }
        } else {
            // problème de check ici
            if (req.body.compte_actif === true) {
                const verif = await bcrypt.compare(req.body.password, data.password);
                if (verif) {
                    console.log("success", 1);
                    res.status(200).json({
                        userId: data.id,
                        userRang: data.rang,
                        token: jwt.sign(
                            {
                                userId: data.id,
                                userRang: data.rang
                            },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '12h' }
                        )
                    });
                } else {
                    console.log("error : ", 1);
                }
            } else {
                res.status(401).send({
                    message: "Autorisation refusée, compte non activé !"
                });
            }
        }
    });
};

exports.getAll = (req, res) => {
    Users.getAllUsers((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Erreur lors du get all users !"
            });
        } else {
            res.send(data);
        }
    });
};

exports.getUserById = (req, res) => {
    Users.findByUserId(req.params.userId, async (err, data) => {
        if (err) {
            if (err.kind === "auncun_resultat") {
                res.status(404).send({
                    message: "Aucun utilisateur trouvé !"
                });
            } else {
                res.status(500).send({
                    message: "Erreur survenue !"
                });
            }
        } else {
            console.log("success", 1);
            res.status(200).send(data);
        }
    });
};

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Contenu vide !"
        });
    }

    if (!req.params.userId) {
        res.status(400).send({
            message: "Id introuvable !"
        });
    }

    Users.findByUserId(req.params.userId, async (err, dataUserFindById) => {
        if (err) {
            if (err.kind === "auncun_resultat") {
                res.status(404).send({
                    message: "Aucun utilisateur trouvé !"
                });
            } else {
                res.status(500).send({
                    message: "Erreur survenue !"
                });
            }
        } else {
            if (req.body.password) {
                salt = bcrypt.genSaltSync(10);
                newPassword = bcrypt.hashSync(req.body.password, salt);
            }

            const userUpdated = new Users({
                email: req.body.email || dataUserFindById.email,
                password: newPassword || dataUserFindById.password,
                rang: req.body.rang || dataUserFindById.rang
            });

            Users.updateById(
                req.params.userId,
                new Users(userUpdated), (err, data) => {
                    if (err) {
                        if (err.king == "not_found") {
                            res.status(404).send({
                                message: "Pas d'utilisateur trouvé avec cet id !"
                            });
                        } else {
                            res.status(500).send({
                                message: "Erreur lors de la mise à jour !"
                            });
                        }
                    } else {
                        res.send(data);
                    }
                }
            );
        }
    });
};