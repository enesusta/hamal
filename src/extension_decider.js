const path = require('path');
const { RULES_FILE } = process.env;

const extension = path.extname(RULES_FILE);

module.exports = extension;

