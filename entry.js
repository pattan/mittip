var request = require('superagent');

var placeholder = document.querySelector('.placeholder');
request.get('http://jsonip.com')
.set('Accept', 'application/json')
.end(function(err, res){
  placeholder.innerHTML = '<h1>' + res.body.ip + '</h1>';
});
