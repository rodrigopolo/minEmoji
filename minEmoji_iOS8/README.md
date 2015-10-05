# Beta
This is an stable beta for the new minEmoji version which suports ALL new emojis from iOS 9.1 and OS X 10.11.1, both at this moment aren't released to the masses.

This is the only library updated in the package, the main reason resides in the lack of extra emojis from other sources, the only source available is “Apple Color Emoji.ttf” from OS X 10.11.1, twemoji is lacking new images and there is no new emojis from Google, so I’m stuck with Apple’s PNGs as the only option...

The second problem is that 1,619 emojis make the idea of using a PNG sprite obsolete, it is too much data to load a single emoji, so it is better to load each image separately.

This two issues make hard to “upgrade” all the libraries for now.

iOS 9.1 includes new emojis
http://blog.emojipedia.org/ios-9-1-includes-new-emojis/

More info about Apple 2015 emoji changelog:
http://blog.emojipedia.org/apple-2015-emoji-changelog-ios-os-x

More info about twemoji:
https://github.com/twitter/twemoji

UPDATE: There are good news, Emoji One is promising all Unicode 8.0 emojis in their next release, wich means there will be more options and SVG emojis:

https://twitter.com/emojione/status/639919754707398657

https://twitter.com/emojione/status/644947656695877632

About Emoji One:
http://emojione.com/