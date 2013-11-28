var rimgs='',
    tile_with = 20,
    tile_height = 20,
    cols = 7;
var img_x = 0;
var img_y = 0;
var pos_x, pos_y, pos_x_st, pos_y_st;
for(var i=0;i<845;i++){
	if(img_x==cols){
		img_x = 0;
		img_y++;
	}
	if(i==305||i==535||i==636){
		img_x = 0;
		img_y++;
	}
	pos_x = (img_x*tile_with);
	pos_y = (img_y*tile_height);
	pos_x_st = (pos_x==0)?'0':'-'+pos_x+'px';
	pos_y_st = (pos_y==0)?'0':'-'+pos_y+'px';
	rimgs+='.emj'+i+'{background-position:'+pos_x_st+' '+pos_y_st+'}';
	img_x++;
}
var b="\n";
var css_in = '.em {'+b
+ 'background: url("../img/sprite.png") top left no-repeat;'+b
+ 'width: 20px;'+b
+ 'height: 20px;'+b
+ 'display: -moz-inline-stack;'+b
+ 'display: inline-block;'+b
+ '*display: inline;'+b
+ 'zoom: 1;'+b
+ '}'+b;





console.log(css_in+rimgs);