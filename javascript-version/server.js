const GenerateCaptcha = require("captchagen.js");
const express = require('express');
const app = express();

app.post('/getcaptcha', async(req, res) => {
  const size = req.query.size || 8
  res.send(GenerateCaptcha(size));
});

app.listen(3000);
