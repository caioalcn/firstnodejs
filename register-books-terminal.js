var http = require('http');

var config = {
    hostname: 'localhost',
    port: 8080,
    path: '/products',
    method: 'post', 
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};

var newProduct = {
    'title' : 'More about node',
    'description' : 'node, javascript, http',
    'price' : '100'
};

var client = http.request(config, function(res){
    console.log(res.statusCode);
});

client.end(JSON.stringify(newProduct));