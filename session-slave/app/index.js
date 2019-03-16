const express = require('express');
var request = require('request');
 
const app = express();
 
app.get('/', (req, res) => {
  res.send('appName');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/newSession', (req, res) => {
  request.get({
    url: 'http://session-master-app:8080/newSession',
    json: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
  );
  request.get()
  res.send(request.body+request.statusCode+request);
});
 
app.listen(8080, () => {
  console.log('Listening on port 8080');
});