#!/usr/bin/env node

var ios9_1emoji = require('./ios9_1emoji.json');

// Settings
var tile_w=20;
var tile_h=20;

var cols = 5;


// Code
var css='';
var img_x = 0;
var img_y = 0;
var currset = ios9_1emoji[0].set;
var pos_x, pos_y, pos_x_st, pos_y_st;
function cp(t){t=t.replace(/\ufe0f|\u200d/gm,"");for(var o=[],n=0,r=0,e=0;e<t.length;)n=t.charCodeAt(e++),r?(o.push((65536+(r-55296<<10)+(n-56320)).toString(16)),r=0):n>=55296&&56319>=n?r=n:o.push(n.toString(16));return o.join("-")}

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
	css+='.emojis-t-'+cp(ios9_1emoji[i].emoji)+'{background-position:'+pos_x_st+' '+pos_y_st+'}\n';
	//css+='.emj'+ios9_1emoji[i].ap+'{background-position:'+pos_x_st+' '+pos_y_st+'}';

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