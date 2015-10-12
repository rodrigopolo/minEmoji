#!/usr/bin/env node

var ios9_1emoji = require('./ios9_1emoji.json');

// Settings
var tile_w=20;
var tile_h=20;

var cols = 6;


// Code
var css='';
var img_x = 0;
var img_y = 0;
var currset = ios9_1emoji[0].set;
var pos_x, pos_y, pos_x_st, pos_y_st;
function cp(t){for(var n=[],r=0,o=0,h=0;h<t.length;)r=t.charCodeAt(h++),o?(n.push((65536+(o-55296<<10)+(r-56320)).toString(16)),o=0):r>=55296&&56319>=r?o=r:n.push(r.toString(16));return n.join("-")}

for (var i = 0; i < ios9_1emoji.length; i++) {
	if(img_x==cols || currset!=ios9_1emoji[i].set){
		img_x = 0;
		img_y++;
		if(currset!=ios9_1emoji[i].set){
			currset = ios9_1emoji[i].set;
		}
	}
	pos_x = (img_x*tile_w);
	pos_y = (img_y*tile_h);
	pos_x_st = (pos_x==0)?'0':'-'+pos_x+'px';
	pos_y_st = (pos_y==0)?'0':'-'+pos_y+'px';
	//css+='.e'+cp(ios9_1emoji[i].emoji)+'{background-position:'+pos_x_st+' '+pos_y_st+'}';
	css+='.emj'+ios9_1emoji[i].ap+'{background-position:'+pos_x_st+' '+pos_y_st+'}';

	img_x++;
};

var css_head = '.em {'
+ 'background: url("../img/ios9_1emoji.png") top left no-repeat;'
+ 'width: 20px;'
+ 'height: 20px;'
+ 'display: -moz-inline-stack;'
+ 'display: inline-block;'
+ '*display: inline;'
+ 'zoom: 1;'
+ '}';

console.log(css_head+css);