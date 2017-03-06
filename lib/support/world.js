const http = require('request-promise');
const loadash = require('lodash');
const config = require('../config.js');

function World() {
    var that =  this;
    this.httpGet = function (uri) {
        var options = {
            uri: uri,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };

        if(config.baseUrl){
            options.uri = config.baseUrl + options.uri;
        }
        return http(options)
            .then(function (response) {
                that.actualResponse = response
            })
            .catch(function (err) {
                console.log(err)
            });
    }
    this.getValue=function(path)
    {
       return loadash.get(that.actualResponse, path);
    }}


module.exports = function () {
    this.World = World;
};