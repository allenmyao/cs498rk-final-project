var stackController = require('./../stack-controller');
var respond = require('./utils').respond;

exports.getStacks = function(req, res, next) {
    stackController.getStacks(function(err, stacks, errorMessage) {
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
            res.status(200);
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
