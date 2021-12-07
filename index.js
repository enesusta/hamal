const express = require("express");
const ruleFileExtension = require("./src/extension_decider")

const app = express();
const FOUND = 302;

console.log(ruleFileExtension)
const strategy = {
    '.json': require('./src/json_resolver'),
    '.yml': require('./src/yml_resolver')
}


const rules = strategy[ruleFileExtension]

app.get('/', (req, res) => {
    const host = req.headers.host;
    res.redirect(FOUND, rules[host]);
});

app.get('/r/:param', (req, res) => {
    const host = req.headers.host;
    const param = req.params.param;

    if ( param ) {
        res.redirect(FOUND, `${ rules[host] }/${ param }`);
    } else {
        res.redirect(FOUND, rules[host]);
    }
});

app.listen(80);