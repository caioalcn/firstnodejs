module.exports = function(appExpress) {

    var listProducts = function(req, res) {
        var connection = appExpress.infra.dbConnection();
        var productsDAO = new appExpress.infra.DAOProducts(connection);
        productsDAO.list(function(err, result) {
            res.format({
                html: function() {
                    res.render('products/list', {list: result});
                },
                json: function() {
                    res.json(result);
                }
            });
        });
        connection.end();
    }


    appExpress.get('/products', listProducts);

    appExpress.get('/products/form', function(req, res){
        res.render('products/form');
    });

    appExpress.post('/products', function(req, res) {

        var product = req.body;
        console.log(product);
        var connection = appExpress.infra.dbConnection();
        var productsDAO = new appExpress.infra.DAOProducts(connection);
        productsDAO.save(product, function(err, result) {
            console.log(err);
            res.redirect('/products');
         });
    });
}