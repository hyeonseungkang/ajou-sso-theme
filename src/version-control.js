const fs = require('node:fs')

const paths = {
    version: 'VERSION'
};

const versionBody = fs.readFileSync(paths.version, 'utf-8');
versions = versionBody.split('.').map((v) => Number(v));
versions[1] += 1;
fs.writeFileSync(paths.version, versions.map((v) => String(v)).join('.'));
