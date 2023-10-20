// EXAMPLE USAGE IN OTHER FILES
//   const GenerateCaptcha = require("captchagen.js")
//   generateCaptcha({size: 8}).then((info) => {
//       console.log(info)
//   })


var svgToPng = require('svg-png-converter').svg2png
var svgCaptcha = require('svg-captcha');
const RetrievePixels = require("javascript-version/convertjs.js")

async function generateCaptcha(options) {
    var info = "fail"
    var captchaObject = svgCaptcha.create(options || {
      size: 8,
      noise: 1,
      color: false,
    })
    console.log(captchaObject.data)
    await svgToPng({
      input: captchaObject.data.toString().trim(),
      encoding: 'buffer', 
      format: 'png',
    })
    .then((png) => {
        RetrievePixels(png).then((res)  => {
 	    info = JSON.stringify({data: res, text: captchaObject.text});
        })
    });

    var startTime = new Date()
    await new Promise(resolve => {
       setTimeout(function(){
           if (!(info=="fail") || (new Date()) - startTime >= 5000) resolve();
       }, 500);
    });
    return info;
}

module.exports = generateCaptcha
