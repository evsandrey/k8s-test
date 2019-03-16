const express = require('express');
 
const app = express();
 
app.get('/', (req, res) => {
  res.send('appName');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/newSession', (req, res) => {
  res.send("some session created");
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});