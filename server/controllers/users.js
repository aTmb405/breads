let users = require('../helpers/users');

exports.findAllUsers = async (req, res, next) => {
    try {
        let allUsers = await users.findAll();
        return res.status(200).json(allUsers);
    }
    catch (err) {
        console.log('listAllUsers - controllers/users');
        return next(err);
    }
}