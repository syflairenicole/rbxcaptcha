const GenerateCaptcha = require("javascript-version/captchagen.js");
const express = require('express');
const app = express();

app.use(express.static("public"));

app.get('/getcaptcha', async(req, res) => {
  const size = req.param("size") || 8
  res.json(GenerateCaptcha(parseInt(size)));
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
