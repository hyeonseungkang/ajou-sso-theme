# Modern Ajou SSO Theme
<a href="https://chromewebstore.google.com/detail/icelkcckfhcdflcbnjceoociplajlhbc">
<img src="https://img.shields.io/chrome-web-store/rating/icelkcckfhcdflcbnjceoociplajlhbc">
<br>
<img src="assets/206x58-chrome-web-bcb82d15b2486.png">
</a>

<br>
<br>

>
> Substitute old Ajou University login page with modern theme.
> 

## Screenshot
![ezgif-49ddd089ea9ad8dd.webp](assets/ezgif-49ddd089ea9ad8dd.webp)

## Features

- Add EN version to detect `navigator.language`
- Light/Dark mode responsive
- Responsible design / Mobile Compatible design
- Little taste of neumorphism design

## Summary

The extension [detects](https://github.com/hyeonseungkang/ajou-sso-theme/blob/4480e31b453e35df4fcc99408123936aa499e1e1/manifest.json#L15) url which starts with `sso.ajou.ac.kr`. If it starts, [theme application code](content.js) will insert to html.
Theme application code are reveal under repo.
- https://github.com/hyeonseungkang/ajou-sso-theme

## For Safari, mobile or other browser users

Script for [Tampermonkey](https://www.tampermonkey.net) or [Userscripts](https://apps.apple.com/kr/app/userscripts/id1463298887) is available in this repo. Script has same code and functions with extension.

[tampermonkey-ajou-sso-theme.user.js](tampermonkey-ajou-sso-theme.user.js)

## Roadmap

- [x] Github Actions for automated generation for tampermonkey script.
- [x] Auto version control.

## Disclaimer

This extension do not collect or send any data. Inserted codes are only replacing assets in html or applying css.

Feel free make any issues.

- Developer Hyeonseung Kang\<강 현승, hyeonseungkang@outlook.com\>
  - 아주대학교 경영인텔리전스학과
  - MIS, Ajou University
- [History of this repo](HISTORY.md)
