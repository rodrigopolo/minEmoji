#!/usr/bin/env node

var beautify = require('js-beautify').js_beautify,
	fs = require('fs'),
	split = require("split"),
	Transform = require("stream").Transform,
	util = require("util");


function toProperCase(s){
  return s.trim().toLowerCase().replace( /\b((m)(a?c))?(\w)/g,
          function($1, $2, $3, $4, $5) { if($2){return $3.toUpperCase()+$4+$5.toUpperCase();} return $1.toUpperCase(); });
}

function fixCP(cp){
	var cpa = cp.trim().split(' ');
	for (var i = 0; i < cpa.length; i++) {
		cpa[i] = cpa[i].replace(/^0+/i,'');
	}
	return cpa.join('-').toLowerCase();
}

var sources = {
	j: "Japanese carriers",
	a: "ARIB",
	z: "Zapf Dingbats",
	x: "Other",
	w: "Wingdings & Webdings"
}

function arSources(s){
	var eso = s.trim().split(' ');
	var ar=[];
	for (var i = 0; i < eso.length; i++) {
		ar.push(sources[eso[i]]);
	}
	return ar;
}

var out = [];

util.inherits(ProblemStream, Transform);
function ProblemStream () {
	Transform.call(this);
}

var lineRegParser = /^([0-9A-Fa-f]{4,}(?: [0-9A-Fa-f]{4,})?) ;\t(\w+) ;\tL(\w+) ;\t(\w+) ;\t([\w ]+)\t# V([0-9.]+) \((.*)\) (.*)/i; 

ProblemStream.prototype._transform = function (line, encoding, processed) {
	var com, em;
	if(com = /^[^#]/.exec(line)){
		if(em = lineRegParser.exec(line)){
			out.push({
				code: fixCP(em[1]),
				has_emoji_style: (em[2]=='emoji'),
				level: em[3].trim(),
				modifier: em[4].trim(),
				sources: arSources(em[5]),
				version: em[6].trim(),
				emoji: em[7].trim(),
				descr: toProperCase(em[8])

			});
		}
	}
	processed();
};

var st = fs.createReadStream('emoji-data.txt',{defaultEncoding: 'utf8'});
st.pipe(split()).pipe(new ProblemStream());
st.on('end', function() {
	console.log(beautify(JSON.stringify(out), { indent_size: 2 }));
});
