module.exports = {

    /**
        Respond to a request. Include error message when necessary. 
        Caller must set response status or other header options before calling
        this function.
        
        @param res response obj
        @param data data to send in the response
        @param error 
        @param errorMessage optional, message to send in case there's an error. 
                            default - the error's string representation
    */
    respond: function(res, data, error, errorMessage) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS, DELETE");
        res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");

        if (error) {
            console.log(error);
        }
        if (error == null && data == null) {
            console.log("WARNING - error and data are both NULL.");
        }

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
