import {svg2png} from 'svg-png-converter'
var svgCaptcha = require('svg-captcha');
//const express = require('express');

//const app = express();

async function generateCaptcha(options) {
    var captchaObject = svgCaptcha.create(options || {
      size: 6,
      noise: 1,
      color: false,
    })
  console.log(captchaObject.data)
    const png = await svg2png({
      input: captchaObject.data.toString().trim(),
      encoding: 'dataURL', 
      format: 'png',
    });
    console.log(png)
}

/*app.post('/getcaptcha', async(req, res) => {
  
  
  res.send(png);
});

app.listen(3000);
*/
