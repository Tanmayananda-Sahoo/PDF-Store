const bcrypt = require('bcrypt');

const hashPassword = async(password) => {
    hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}

module.exports = {
    hashPassword
}