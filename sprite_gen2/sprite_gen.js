var ios8emoji = require('./ios8emoji.json');

// Settings
var tile_w=160;
var tile_h=160;

var cols = 5;


// Code
var rimgs='';
var img_x = 0;
var img_y = 0;
var currset = ios8emoji[0].set;

for (var i = 0; i < ios8emoji.length; i++) {
	if(img_x==cols || currset!=ios8emoji[i].set){
		img_x = 0;
		img_y++;
		if(currset!=ios8emoji[i].set){
			currset = ios8emoji[i].set;
			rimgs+='\n';
		}
	}
	rimgs+='<image x="'+(img_x*tile_w)+'" y="'+(img_y*tile_h)+'" width="'+tile_w+'" height="'+tile_h+'" xlink:href="images/160x160/'+ios8emoji[i].ap+'.png"/>\n';
	img_x++;
};

var svg = '<svg version="1.1" baseProfile="tiny" id="svg-root"'
+ '  width="'+(tile_w*cols)+'" height="'+(tile_h*img_y)+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n'
+ '<title>Emoji</title>\n'
+ '<g>\n'
+ rimgs
+ '</g>\n'
+ '</svg>';

console.log(svg);