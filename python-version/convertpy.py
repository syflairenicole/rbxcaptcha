# EXAMPLE USAGE (IN OTHER FILES)
#  from module import RetrievePixels
#  print(RetrievePixels("example.png"))

from PIL import Image

def RetrievePixels(path):
    img = Image.open(path,"r")
    img_pixels = list(img.getdata())
    
    numpixels = len(img_pixels)
    for i in range(numpixels):
        img_pixels[i] = str(img_pixels[i])
        rgba = img_pixels[i].split(", ")
        for channel in range(len(rgba)):
            if channel == 3:
                img_pixels[i] = img_pixels[i][0:len(img_pixels[i]) - len(rgba[channel]) - 2]
                img_pixels[i] = img_pixels[i] + ";"
    
    img_pixels_str = str(img_pixels)
    img_pixels_str = img_pixels_str.replace("'","").replace("(","").replace(")","").replace("[","").replace("]","").replace(";,",";").replace(" ","")
    img_pixels_str = img_pixels_str[0:len(img_pixels_str)-1].replace("\n","")
