var ios8emoji = require('./ios8emoji.json');

// Settings
var tile_w=20;
var tile_h=20;

var cols = 5;


// Code
var css='';
var img_x = 0;
var img_y = 0;
var currset = ios8emoji[0].set;
var pos_x, pos_y, pos_x_st, pos_y_st;

for (var i = 0; i < ios8emoji.length; i++) {
	if(img_x==cols || currset!=ios8emoji[i].set){
		img_x = 0;
		img_y++;
		if(currset!=ios8emoji[i].set){
			currset = ios8emoji[i].set;
		}
	}
	pos_x = (img_x*tile_w);
	pos_y = (img_y*tile_h);
	pos_x_st = (pos_x==0)?'0':'-'+pos_x+'px';
	pos_y_st = (pos_y==0)?'0':'-'+pos_y+'px';
	css+='.emj'+ios8emoji[i].ap+'{background-position:'+pos_x_st+' '+pos_y_st+'}';

	img_x++;
};

var css_head = '.em {'
+ 'background: url("../img/ios8sprite.png") top left no-repeat;'
+ 'width: 20px;'
+ 'height: 20px;'
+ 'display: -moz-inline-stack;'
+ 'display: inline-block;'
+ '*display: inline;'
+ 'zoom: 1;'
+ '}';

console.log(css_head+css);