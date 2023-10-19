const { convert } = require('convert-svg-to-png');
const express = require('express');

const app = express();

app.post('/getcaptcha', async(req, res) => {
  
  
  res.send(png);
});

app.listen(3000);
