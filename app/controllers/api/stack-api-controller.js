var stackController = require('./../stack-controller');


exports.getStacks = function(req, res, next) {
    stackController.getStacks(function(err, stacks) {
        if (err) {
            res.status(500).json({
                message: 'Error encountered while retrieving stacks',
                error: err
            });
        } else {
            res.status(200).json({
                message: 'Successfully retrieved stacks',
                data: stacks
            });
        }
    })
};

exports.postStacks = function(req, res, next) {
    stackController.createStack(req.body, function(err, stack) {
        if (err) {
            res.status(500).json({
                message: 'Error encountered while creating stack',
                error: err
            });
        } else {
            res.status(200).json({
                message: 'Successfully created stack',
                data: stack
            });
        }
    });
};

exports.optionsStacks = function(req, res, next) {
    res.status(200).send();
};

exports.getStack = function(req, res, next) {
    stackController.getStack(req.params.stack_id, function(err, stack) {
        if (err) {
            res.status(500).json({
                message: 'Error encountered while retrieving stack',
                error: err
            });
        } else {
            res.status(200).json({
                message: 'Successfully retrieved stack',
                data: stack
            });
        }
    });
};

exports.putStack = function(req, res, next) {
    stackController.updateStack(req.params.stack_id, req.body, function(err, stack) {
        if (err) {
            res.status(500).json({
                message: 'Error encountered while updating stack',
                error: err
            });
        } else {
            res.status(200).json({
                message: 'Successfully updated stack',
                data: stack
            });
        }
    });
};

exports.deleteStack = function(req, res, next) {
    stackController.deleteStack(req.params.stack_id, function(err, stack) {
        if (err) {
            res.status(500).json({
                message: 'Error',
                error: err
            });
        } else {
            res.status(200).json({
                message: 'Successfully deleted stack',
                data: stack
            });
        }
    });
};