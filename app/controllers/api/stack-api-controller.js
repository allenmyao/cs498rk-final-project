var stackController = require('./../stack-controller');
var respond = require('./utils').respond;

exports.getStacks = function(req, res, next) {
    var where  = req.query.where  ? JSON.parse(req.query.where)  : {};
    var sort   = req.query.sort   ? JSON.parse(req.query.sort)   : {};
    var select = req.query.select ? JSON.parse(req.query.select) : {};
    var skip   = req.query.skip   ? parseInt(req.query.skip)     : 0;
    var limit  = req.query.limit  ? parseInt(req.query.limit)    : 0;
    var count  = req.query.count  ? req.query.count === 'true'   : false;
    var params = {
        where: where,
        sort: sort,
        select: select,
        skip: skip,
        limit: limit,
        count: count
    };
    // Check for private stacks
    console.log(req.user);
    if (req.user) {
        params.where = { $and: [
            params.where,
            { $or:  [ { private: false }, { owner_id: req.user._id } ] }
        ] };
    } else {
        params.where = { $and: [
            params.where,
            { private: false }
        ] };
    }
    console.log(params);
    stackController.getStacks(params, function(err, stacks, errorMessage) {
        if (err) {
            res.status(500);
        } else {
            res.status(200);
        }
        errorMessage = errorMessage || "Error encountered while retrieving stacks.";
        respond(res, stacks, err, errorMessage);
    })
};

exports.postStacks = function(req, res, next) {
    stackController.createStack(req.body, function(err, stack, errorMessage) {
        if (err) {
            res.status(500);
        } else {
            res.status(201);
        }
        errorMessage = errorMessage || "Error encountered while creating stack.";
        respond(res, stack, err, errorMessage);
    });
};

exports.optionsStacks = function(req, res, next) {
    res.status(200).send();
};

exports.getStack = function(req, res, next) {
    stackController.getStack(req.params.stack_id, function(err, stack, errorMessage) {
        if (err) {
            res.status(500);
        } else {
            res.status(200);
        }
        errorMessage = errorMessage || "Error encountered while retrieving stack.";
        respond(res, stack, err, errorMessage);
    });
};

exports.putStack = function(req, res, next) {
    stackController.updateStack(req.params.stack_id, req.body, function(err, stack, errorMessage) {
        if (err) {
            res.status(500);
        } else {
            res.status(200);
        }
        errorMessage = errorMessage || "Error encountered while updating stack.";
        respond(res, stack, err, errorMessage);
    });
};

exports.deleteStack = function(req, res, next) {
    stackController.deleteStack(req.params.stack_id, function(err, stack, errorMessage) {
        if (err) {
            res.status(500);
        } else {
            res.status(200);
        }
        errorMessage = errorMessage || "Error encountered while deleting stack.";
        respond(res, stack, err, errorMessage);
    });
};
