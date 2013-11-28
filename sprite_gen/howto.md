## Creating PNG Sprites

### Software needed (Ingridients)

* Git
* wget / curl
* Ruby
* OS X Mavericks
* [Node.js](http://nodejs.org/)
* [ImageMagick](http://www.imagemagick.org/script/binary-releases.php)
* [OptiPNG](http://optipng.sourceforge.net/)
* [AdvanceCOMP](http://advancemame.sourceforge.net/comp-download.html)


### Knowledge
* How to use a command line tool
* How to call a binary from a command line tool
* How to add any binary to your enviroment executable PATH

### Steps
1. Getting Android like PNG Emojis
2. Getting Apple PNG Emojis
3. Merging all PNGs into one sprite and optimizing the PNG
4. Creating a CSS sprite file

#### 1. Getting Android like PNG Emojis
* First we need to download the "Emojify" [Chrome extension](https://chrome.google.com/webstore/detail/emojify/lpkndkffkmhcdkkdmeeelikmadjjmebe), and thanks to [an answear on StackOverflow](http://stackoverflow.com/questions/7184793/how-to-download-a-crx-file-from-the-chrome-web-store-for-a-given-id) we can know the URL for the CRX extension, the CRX is just a ZIP file with all the Emoji's PNGs.
  * Windows:
    Use any other browser but not Chrome and enter the extension URL in the address bar
  * OS X: On the Terminal, type the following command to download the extension.
    `curl -L -o extension_1_8.crx.zip "http://clients2.google.com/service/update2/crx?response=redirect&x=id%3Dlpkndkffkmhcdkkdmeeelikmadjjmebe%26uc%26lang%3Den-US&prod=chrome"`
  * Linux: On the Terminal, type the following command to download the extension.
    `wget "http://clients2.google.com/service/update2/crx?response=redirect&x=id%3Dlpkndkffkmhcdkkdmeeelikmadjjmebe%26uc%26lang%3Den-US&prod=chrome" --no-check-certificate -O extension_1_8.crx.zip`
* Then you can unzip the contents of the file, if the extension is CRX, rename it to ZIP and extract the files.
* Find the folder called "emoji" inside the "img" folder, it cointains all the Emoji images.
* Move all the images from the folder "emoji" to the folder "img" inside the folder "android_gen".

#### 2. Getting Apple PNG Emojis
For Apple PNG Emojis you have to be running OS X Maverick in order to use the ["emoji-extractor"](https://github.com/tmm1/emoji-extractor) to get all the PNGs from the "Apple Color Emoji.ttf" font.
* Open the Terminal
* Enter the following commands one by one in order to get into the Desktop folder, clone the "emoji-extractor" from github, delete any image it has cloned, run the ruby script to extract the images:

  ```
  cd
  cd Desktop
  git clone https://github.com/tmm1/emoji-extractor.git
  cd emoji-extractor
  rm -rf images/
  ruby emoji_extractor.rb
  ```

* When the script is done, inside the "emoji-extractor" folder you'll find a folder called "images", and inside this folder you'll find a folder called "160x160".
* Move all the images from the folder "160x160" to the folder "img" inside the folder "apple_gen".

#### 3. Merging all PNGs into one sprite and optimizing the PNG
* Make sure you have installed Node.js, ImageMagick, OptiPNG, AdvanceCOMP and all of them can run on the Terminal or Command Prompt.
* Inside your Terminal or Command Prompt window go to your "android_gen" or "apple_gen" folder.
* Create the "sprite.svg" by typing the following command on the Terminal: 
  `node sprite_gen.js > sprite.svg`
* Convert the SVG file to PNG with ImageMagick by typing the following command on the Terminal: 
  `convert -background none sprite.svg -scale 140x2440 -depth 8 sprite.png`
* Optimize the sprite.png file with OptiPNG by typing the following command on the Terminal: 
  `optipng -o7 sprite.png`
* Optimize the sprite.png file with advpng by typing the following command on the Terminal: 
  `advpng -z -4 sprite.png`
* Last optimization with advdef by typing the following command on the Terminal: 
  `advdef -z -4 sprite.png`

#### 4. Creating a CSS sprite file
Run from the Terminal or Command Prompt on the "sprite_gen" folder: `node cssgen.js > sprite.css`


## Notes:
* If you get the error `emoji_extractor.rb:52: invalid multibyte escape: /\211PNG/` when running the "emoji-extractor" on OS X, install and run a diferent version of Ruby, [here is a guide](http://net.tutsplus.com/tutorials/ruby/how-to-install-ruby-on-a-mac/).
* The MD5 Hash of the "Apple Color Emoji.ttf" is `e702593b79a2e66a122085862ebfd8f7`, to obtain the MD5 Hash of your file you can type:
  * On OS X Terminal: `md5 your_file.ttf`
  * On Linux Terminal: `md5sum your_file.ttf`
  * On Windows Command Prompt: `FCIV -md5 your_file.ttf`