function DAOProducts(connection) {
    this._connection = connection
}

DAOProducts.prototype.list = function(callback) {
    this._connection.query('select * from books', callback);
}

DAOProducts.prototype.save = function(product, callback) {
    this._connection.query('insert into books set ?',product, callback);
}

module.exports = function() {
    return DAOProducts;
}