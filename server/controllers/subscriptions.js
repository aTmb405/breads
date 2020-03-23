let subscriptions = require('../helpers/subscriptions'),
    Subscription = require('../models/subscription').Subscription;

exports.createSubscription = async (req, res, next) => {
    try {
        let newSubscription = new Subscription(req.body.sub_id, req.body.pub_id);
        console.log(newSubscription);
        let subscription = await subscriptions.create(newSubscription);
        return res.status(200).json(subscription);
    }
    catch (err) {
        console.log('createSubscription - controllers/users');
        return next(err);
    }
}

exports.findUserSubscriptions = async (req, res, next) => {
    try {
        let userSubscriptions = await subscriptions.findBySubId(req.params.id);
        return res.status(200).json(userSubscriptions);
    }
    catch (err) {
        console.log('findUserSubcriptions - controllers/subscriptions');
        return next(err);
    }
}