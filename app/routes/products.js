module.exports = function products(appExpress){
        appExpress.get('/products', function(req, res) {
        res.render("products/list");
    })
}