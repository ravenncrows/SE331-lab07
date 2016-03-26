/**
 * Created by HH on 2016/3/26.
 */
'use strict'

var shoppingCartServices = angular.module('shoppingCartServices',['ngResource']);
shoppingCartServices.factory('shoppingCartService',['$resource','API_URL',function($resource,API_URL){
       return $resource(API_URL+'/shoppingcart/:id', { id: '@_id' }, {
           update: {
               method: 'PUT' // this method issues a PUT request
                }});

        }])



