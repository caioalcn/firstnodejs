var appExpress = require('./config/express')();

appExpress.listen(8080, function() {
    console.log("Server Running...");
});


