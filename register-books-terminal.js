var http = require('http');

var config = {
    host: 'localhost',
    port: 8080,
    path: '/products',
    method: 'post', 
    hearders: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};

var client = http.request(config, function(res){
    console.log(res.statusCode);
    res.on('data', function(body){
        console.log('Result'+body);
    });
});

var newProduct = JSON.stringify({
    title : 'More about node',
    description : 'node, javascript, http',
    price : '100'
});

console.log(newProduct);

client.end(newProduct);
