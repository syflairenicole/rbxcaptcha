const GenerateCaptcha = require("./captchagen.js");
const express = require("express");
const app = express();

//app.use(express.static("public"));
app.use((req, res, next) => {
  let ipFilter = ["::12", "127.0.0.1"]; // basic security denying localhost access
  let pass = true
  console.log(req.connection.remoteAddress)
  for (let i = 0; i < ipFilter.length; i ++) {
    var badIp = ipFilter[i];
    if (req.connection.remoteAddress.includes(badIp)) {
      pass = false
      res.send("{}")
    }
  };
  if (pass == true) next();
});

app.get("/getcaptcha", async (req, res) => {
  const size = req.param("size") || 8;
  const noise = req.param("noise") || 1;
  GenerateCaptcha({size:parseInt(size), noise:parseInt(noise)}).then((fres) => {
    res.send(fres);
  });
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
