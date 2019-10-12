const yaml = require('js-yaml');
const deepExtend = require('deep-extend');
const path = require('path');
const fs = require('fs');

const configFile = path.join(process.cwd(), 'config', 'wildduck.yaml');
const rawContent = fs.readFileSync(configFile);

module.exports = deepExtend(yaml.safeLoad(rawContent), {});
