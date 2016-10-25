'use strict';

class ApiHelper {
  constructor(resource, callback, queryObj) {
    this.request = new XMLHttpRequest();
    let url = 'http://patches-api.herokuapp.com/' + resource;

    if (queryObj) url += '?' + Object.keys(queryObj).map(function(k) {return k + "=" + queryObj[k];}).join('&');
    
    this.request.open('get', url);
    this.request.setRequestHeader('Content-Type', 'application/json');
    this.request.addEventListener('load', callback);
    this.request.send();
  }
}

module.exports = ApiHelper;