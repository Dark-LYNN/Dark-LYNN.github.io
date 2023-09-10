# pyright: reportMissingModuleSource=false

import os
from PIL import Image

def convert_tif_to_png_in_place(input_dir):
    for root, _, files in os.walk(input_dir):
        for file in files:
            if file.endswith('.tif'):
                tif_path = os.path.join(root, file)
                print(tif_path)  

                try:
                    img = Image.open(tif_path)
                    png_path = os.path.splitext(tif_path)[0] + '.png'
                    img.save(png_path, "PNG")
                    os.remove(tif_path)  # Remove the original .tif file
                    print(f"Converted {tif_path} to {png_path} and removed original")
                except Exception as e:
                    print(f"Failed to convert {tif_path}: {str(e)}")

if __name__ == "__main__":
    input_directory = r"E:\Codes\Akira-OpenSource\Dark-LYNN.github.io\cdn\Overwatch"

    convert_tif_to_png_in_place(input_directory)
