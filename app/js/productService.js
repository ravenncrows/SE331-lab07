'use strict'
var productService = angular.module('productServices',['ngResource']);


productService.factory('productService',['$resource','API_URL',function($resource,API_URL){
    return $resource(API_URL+'/product/:id', { id: '@_id' }, {
        update: {
            method: 'PUT' // this method issues a PUT request
        }});

}])

productService.service('totalCalService',function() {
    this.getTotalNetPrice = function (products) {
        var output = 0.0;

        for (var index = 0; index < products.length;index++) {
            var product = products[index];
            output += parseFloat(product.netPrice);
        }
        return output;
    }
})