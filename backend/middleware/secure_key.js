module.exports = {

    /**
     * 
     * @param {number} longueur 
     * @returns 
     */
    genSecureKey: function (longueur) {
        var result = '';
        var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var longueurCaracteres = caracteres.length;

        for (var i = 0; i < longueur; i++) {
            result += caracteres.charAt(Math.floor(Math.random() * longueurCaracteres));
        }

        return result;
    }

};