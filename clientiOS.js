var http = require('http');

var config = {
    hostname: 'localhost',
    port: 8080,
    path: '/products',
    headers: {'Accept': 'application/json'}
};

http.get(config, function(res){
    console.log(res.statusCode);
    res.on('data', function(body){
        console.log('Result'+body);
    });
}); 