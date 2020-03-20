require('dotenv').config();
let jwt = require("jsonwebtoken");

exports.loginRequired = function(req, res, next){
    try {
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
            if(decoded) return next();
            // else res.status(401).json({message: 'Please log in first - WRONG TOKEN'})
            else next({
                status: 401,
                message: 'Please log in first'
            });
        });
    }
    catch (err) {
        // res.status(401).json({message: 'Please log in first - NO HEADER'})
        next({
            status: 401,
            message: 'Please log in first'
        });
    }
}

exports.ensureCorrectUser = function(req, res, next) {
    try {
        let token = req.headers.authorization.split(" ")[1]
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
            if(decoded && decoded.id == req.params.id) return next(); //username -> id
            else next({
                status: 401,
                message: 'Unauthorized'
            });
        });
    }
    catch (err) {
        next({
            status: 401,
            message: 'Unauthorized'
        });
    }
}