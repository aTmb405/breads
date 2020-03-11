require('dotenv').config();
let jwt = require("jsonwebtoken");

exports.loginRequired = function(req, res, next){
    let token = req.headers.authorization.split(" ")[1];
    try {
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
            if(decoded) return next();
            else res.status(401).json({message: 'Please log in first - WRONG TOKEN'})
        });
    }
    catch (err) {
        res.status(401).json({message: 'Please log in first - NO HEADER'})
    }
}

exports.ensureCorrectUser = function(req, res, next) {
    try {
        let token = req.headers.authorization.split(" ")[1]
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
            if(decoded && decoded.username === req.params.username) return next();
            else res.status(401).json({message: 'Unauthorized'});
        });
    }
    catch (err) {
        res.status(401).json({message: 'Unauthorized'})
    }
}