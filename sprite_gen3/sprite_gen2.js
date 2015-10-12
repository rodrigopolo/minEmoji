#!/usr/bin/env node

var ios9_1emoji = require('./ios9_1emoji2.json');

// Settings
var tile_w=160;
var tile_h=160;

var cols = 6;


// Code
var rimgs='';
var img_x = 0;
var img_y = 0;
var currset = ios9_1emoji[0].set;

for (var i = 0; i < ios9_1emoji.length; i++) {
	if(img_x==cols || currset!=ios9_1emoji[i].set){
		img_x = 0;
		img_y++;
		if(currset!=ios9_1emoji[i].set){
			currset = ios9_1emoji[i].set;
			rimgs+='\n';
		}
	}
	rimgs+='<image x="'+(img_x*tile_w)+'" y="'+(img_y*tile_h)+'" width="'+tile_w+'" height="'+tile_h+'" xlink:href="images/160x160/'+ios9_1emoji[i].ap+'.png"/>\n';
	img_x++;
};

var svg = '<svg version="1.1" baseProfile="tiny" id="svg-root"'
+ '  width="'+(tile_w*cols)+'" height="'+(tile_h*(img_y+1))+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n'
+ '<title>Emoji</title>\n'
+ '<g>\n'
+ rimgs
+ '</g>\n'
+ '</svg>';

console.log(svg);