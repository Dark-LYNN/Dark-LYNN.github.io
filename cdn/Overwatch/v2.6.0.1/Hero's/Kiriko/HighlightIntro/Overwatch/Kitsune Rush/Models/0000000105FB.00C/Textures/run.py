from PIL import Image
import os

for file in os.listdir('.'):
    if file.endswith('.tif'):
        im = Image.open(file)
        im.save(os.path.splitext(file)[0] + '.png')
