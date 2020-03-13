let User = require("../models/user").User,
    jwt = require('jsonwebtoken'),
    comparePassword = require('../helpers/auth').comparePassword;
    select = require("../helpers/users");

exports.signup = async function(req, res, next) {
    let newUser = new User(req.body.first_name, req.body.last_name, req.body.username, req.body.email, req.body.password);
    try {
        await select.create(newUser);
        let token = jwt.sign({ username: newUser.username }, process.env.SECRET_KEY);
        res.status(200).json({ username: newUser.username, token });
    }
    catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            err.message = "Sorry, that username and/or email is taken";
        }
        return next({
            status: 400,
            message: err.message
        });
    }
}

exports.signin = function(req, res, next) {
    let username = req.body.username,
        password = req.body.password;

    select.findByUsername(username).then(function(results) {
        comparePassword(password, results[0].password, function(err, isMatch){
            if (isMatch) {
                let token = jwt.sign({ username: username }, process.env.SECRET_KEY);
                res.status(200).json({
                    userId: results[0].id,
                    username: username,
                    token});
            } else res.status(400).json({message: 'Invalid Username/Password.'});
        });
    }).catch(function(err){
        res.status(400).json({message: 'Invalid Email/Password'})
    })
}