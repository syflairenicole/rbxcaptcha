const fs = require('fs');
const jimp = require("jimp");
async function DecodePixels(path) {
	try {
		return jimp.read(path)
		.then((image) => {
			let bitmap = image.bitmap
			var width = bitmap.width;
			var height = bitmap.height;
			var text = "";
			for (var y = 0; y < height; y++) {
			  for (var x = 0; x < width; x++) {
				var pixel = jimp.intToRGBA(image.getPixelColor(x, y));
				text = text + `${pixel.r}, ${pixel.g}, ${pixel.b}`
				if (x < width - 1) {
				    text = text + "; "
				}
			  }
			}
			text = text.replace(/\s/g,"").replace("\n","")
			return text;
		});
	} catch(err) {
		return "fail"
		console.log(err)
	}
};


async function RetrievePixels(path) {
	const pixelData = await DecodePixels(path);
	var pixelsString = pixelData.toString('utf8');
	return pixelsString;
};

module.exports = RetrievePixels
