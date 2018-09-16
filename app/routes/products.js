module.exports = function(appExpress) {

    appExpress.get('/products', function(req, res, next) {
        var connection = appExpress.infra.dbConnection();
        var productsDAO = new appExpress.infra.DAOProducts(connection);
        productsDAO.list(function(err, result) {
            if(err){
                return next(err);
            }
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
    });

    appExpress.get('/products/form', function(req, res){
        res.render('products/form', {errorsValidator : {}, product: {}});
    });

    appExpress.post('/products', function(req, res) {

        var product = req.body;

        req.assert('title', 'Titulo é obrigatório').notEmpty();
        req.assert('price', 'Price wrong').isFloat();

        var errors = req.validationErrors();

        if(errors) {
            res.format({
                html: function() {
                    res.status(400).render('products/form', {errorsValidator : errors, product: product});
                },
                json: function() {
                    res.status(400).json(errors);
                }
            })
            return;
        }

        console.log(product);
        var connection = appExpress.infra.dbConnection();
        var productsDAO = new appExpress.infra.DAOProducts(connection);
        productsDAO.save(product, function(err, result) {
            console.log(err);
            res.redirect('/products');
         });
    });
}