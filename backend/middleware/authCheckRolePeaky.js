const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.token;
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        const rang = decodedToken.userRang;
        console.log(rang);
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            if (rang === 1) {
                next();
            } else {
                res.status(401).json({
                    error: "Connexion refusée !"
                });
            }
        }
    } catch {
        res.status(401).json({
            error: "Connexion refusée !"
        });
    }
};