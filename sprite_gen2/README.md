## Updated Sprite Generator

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

You can install optipng from homebrew, for AdvanceCOMP you have to compile it yourself.
````
brew install optipng
```

