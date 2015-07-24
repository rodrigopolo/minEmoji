## Updated Sprite Generator

### Extract PNGs images from `Apple Color Emoji.ttf` on OS X
```
ruby emoji_extractor.rb
```

### 1. Generate the SVG
```
node sprite_gen.js > sprite.svg
```

### 2. Create an optimized PNG from the SVG
```
convert -background none sprite.svg -scale 100x5460 -depth 8 ios8sprite.png
optipng -o7 ios8sprite.png
advpng -z -4 ios8sprite.png
advdef -z -4 ios8sprite.png
```

#### 3. Create the CSS
```
node cssgen.js > sprite.css
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

