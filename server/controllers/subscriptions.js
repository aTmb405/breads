let subscriptions = require('../helpers/subscriptions'),
    Subscription = require('../models/subscription').Subscription;

exports.createSubscription = async (req, res, next) => {
    try {
        if (req.body.sub_id !== req.body.pub_id) {
            let newSubscription = new Subscription(req.body.sub_id, req.body.pub_id);
            let subscription = await subscriptions.create(newSubscription);
            return res.status(200).json(subscription);
        }
    }
    catch (err) {
        console.log('createSubscription - controllers/users');
        if (err.code === 'ER_DUP_ENTRY') {
            err.message = 'You already subscribe to them!';
        }
        return next({
            status: 400,
            message: err.message
        });
    }
}

exports.findUserSubscriptions = async (req, res, next) => {
    try {
        let userSubscriptions = await subscriptions.findPubReadings(req.params.id);
        return res.status(200).json(userSubscriptions);
    }
    catch (err) {
        console.log('findUserSubcriptions - controllers/subscriptions');
        return next(err);
    }
}