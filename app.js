var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.get('/products', function(req, resp) {
    resp.render("products/list");
})


app.listen(8080, function() {
    console.log("Server Running...");
});


