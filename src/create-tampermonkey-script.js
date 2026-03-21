const fs = require('node:fs')

const paths = {
    version: 'VERSION',
    tampermonkeyBoilerplate: 'assets/tampermonkey-boilerplate',
    contentJs: 'content.js',
    tampermonkeyAjouSsoThemeUserJs: 'tampermonkey-ajou-sso-theme.user.js',
    manifestJson: 'manifest.json'
};

const version = fs.readFileSync(paths.version, 'utf-8')

const tampermonkeyBoilerplateBody = fs.readFileSync(paths.tampermonkeyBoilerplate, 'utf-8');
const contentJsBody = fs.readFileSync(paths.contentJs, 'utf-8');
fs.writeFileSync(
    paths.tampermonkeyAjouSsoThemeUserJs,
    tampermonkeyBoilerplateBody.replace('#####VERSION#####', version) + contentJsBody
)

const manifestJsonBody = fs.readFileSync(paths.manifestJson, 'utf-8');
fs.writeFileSync(
    manifestJsonBody,
    manifestJsonBody.replace('#####VERSION#####', version) + contentJsBody
)
