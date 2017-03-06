'use strict';

const assert = require('assert');


module.exports = function () {

    this.When(/^I make a GET request to "(.*)"$/i, function (uri) {
        return this.httpGet(uri);
    });


    this.Then(/^The response property "(.*)" should be "(.*)"$/i, function (path, expectedValue, callback) {
         var actualValue = this.getValue(path);
       assert.equal(actualValue, expectedValue, `Expected: ${expectedValue} , Actual : ${actualValue}`);
        callback();
    });


};