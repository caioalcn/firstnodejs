module.exports = function(appExpress) {

    var listProducts = function(req, res) {
        var connection = appExpress.infra.dbConnection();
        var productsDAO = new appExpress.infra.DAOProducts(connection);
        productsDAO.list(function(err, result) {
            res.render('products/list', {list: result});
        });
        connection.end();
    }


    appExpress.get('/products', listProducts);

    appExpress.get('/products/form', function(req, res){
        res.render('products/form');
    });

    appExpress.post('/products', function(req, res) {

        var product = req.body;

        var connection = appExpress.infra.dbConnection();
        var productsDAO = new appExpress.infra.DAOProducts(connection);
        productsDAO.save(product, function(err, result) {
            res.redirect('/products');
         });
    });

}