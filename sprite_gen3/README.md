## Updated Sprite Generator 3

### Extract PNGs images from `Apple Color Emoji.ttf` on OS X
```
ruby emoji_extractor.rb
```

### 1. Generate the SVG
```
./sprite_gen.js > sprite.svg 
```

### 2. Create an optimized PNG from the SVG
```
convert -background none sprite.svg -scale 120x5440 -depth 8 ios9_1emoji.png
optipng -o7 ios9_1emoji.png && advpng -z -4 ios9_1emoji.png && advdef -z -4 ios9_1emoji.png
```

#### 3. Create the CSS
```
./cssgen.js > sprite.css
```

>**You'll need this tools**:   
[node.js](https://nodejs.org/)  
[OptiPNG](http://optipng.sourceforge.net/)  
[AdvanceCOMP](http://advancemame.sourceforge.net/comp-download.html)  

### PNG Optimization tools on OS X

You'll need to have installed Xcode, then [Homebrew](http://brew.sh/).

Install OptiPNG
```
brew install optipng
```

Download AdvanceCOMP source:
[http://www.advancemame.it/comp-download.html](http://www.advancemame.it/comp-download.html)

Compile AdvanceCOMP:
```
tar xzf advancecomp-1.19.tar.gz
cd advancecomp-1.19
./configure
make
sudo cp advdef /usr/local/bin/advdef
sudo cp advpng /usr/local/bin/advpng
```

