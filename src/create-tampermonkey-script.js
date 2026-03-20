const fs = require('node:fs')

const tampermonkeyBoilerplateRaw = fs.readFileSync('assets/tampermonkey-boilerplate', 'utf-8');
const contentRaw = fs.readFileSync('content.js', 'utf-8');
const date = new Date();
fs.writeFileSync(
    'tampermonkey-ajou-sso-theme.user.js',
    tampermonkeyBoilerplateRaw.replace('#####VERSION#####', date.valueOf().toString()) + contentRaw
)
