#jMinEmoji2
Please don't hate me, I know this is in bower, I know I could just upgrade the darn script, BUT...
There are so many different things to take into consideretion, heare a few of them:

1. The sprite has incresed it's size from 515KiB (527865) to 932KiB (954475), that is 1.8x from the original, I don't know how practical is the idea of using a sprite when it becomes a huge file.

2. There are no other options to the extracted Apple PNGs, [twemoji](https://github.com/twitter/twemoji) hasn't created all SVGs for the new emojis (no update for jMinEmoji-SVG) and the Chrome extension where I extracted all Google emojis hasn't ben updated since October 8, 2013. All this left us with only one sprite, only one emoji style.

**Conclusion**: Waiting for others sources is silly, I don't want to wait for others and I want a JS library that can handle new emojis, so if I can't upgrade my scripts the only solution is to create a different version.

Do you agree with me? if not, support the project by submitting new sources for the Twitter and Android emojis.

UPDATE: There are good news, Emoji One is promising all Unicode 8.0 emojis in their next release, wich means there will be more options and SVG emojis:

https://twitter.com/emojione/status/639919754707398657

https://twitter.com/emojione/status/644947656695877632

About Emoji One:
http://emojione.com/