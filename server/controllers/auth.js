let User = require("../models/user").User,
    jwt = require('jsonwebtoken'),
    comparePassword = require('../helpers/auth').comparePassword;
    select = require("../helpers/users");

exports.signup = async function(req, res, next) {
    let newUser = new User(req.body.first_name, req.body.last_name, req.body.username, req.body.email, req.body.password, req.body.image);
    console.log(newUser);
    try {
        await select.create(newUser);
        let token = jwt.sign({ 
            username: newUser.username,
            image: newUser.image
        }, process.env.SECRET_KEY);
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

exports.signin = async function(req, res, next) {
    let username = req.body.username,
        password = req.body.password;
    try {
        let user = await select.findByUsername(username)
        comparePassword(password, user[0].password, function(err, isMatch) {
            if (isMatch) {
                let token = jwt.sign({ username }, process.env.SECRET_KEY);
                return res.status(200).json({
                    userId: user[0].id,
                    username,
                    image: user[0].image,
                    token});
            } else {
                return next({
                    status: 400,
                    message: "Invalid Email/Password."
                });
            }
        });
    }
    catch (err) {
        return next({
            status: 400,
            message: "Invalid Email/Password."
        });
    }
}