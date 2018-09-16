var express = require('../config/express')();
var request = require('supertest')(express) ;
var assert = require('assert');

describe('ProductsController', function() {

    beforeEach(function(done) {
        var conn = express.infra.dbConnection();
        conn.query("delete from books", function(err, result){
            if(!err){
                done();
            }
        });
    });

    it('#json list', function(done) {
        request.get('/products')
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(200, done);
    });

    it('#register a new product with invalid products', function(done){
        request.post('/products')
        .send({title: "", description: ""})
        .expect(400, done);
    });

    it('#register a valid new product', function(done){
        request.post('/products')
        .send({title: "title", description: "description", price: 20.5})
        .expect(302, done);
    })
 });