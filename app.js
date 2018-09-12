var appExpress = require('./config/express')();
var routes = require('./app/routes/products')(appExpress);

appExpress.listen(8080, function() {
    console.log("Server Running...");
});


