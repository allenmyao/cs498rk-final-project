module.exports = {
    respond: function(res, data, error, errorMessage) {
        // res: response obj
        // data: data to send in the response
        // error: optional
        // errorMessage: optional, message to send in case there's an error 
        //     default - the error's string representation

        data = data || {};
        var message;
        if (errorMessage === undefined) {
            message = (error) ? error.toString() : "OK";
        } else {
            message = (error) ? errorMessage : "OK";
        }

        res.json({
            "message": message,
            "data": data
        });
    }
}