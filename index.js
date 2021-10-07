const express = require("express");
const ruleFileExtension = require("./src/extension_decider")
const jsonRedirectionRules = require("./src/json_resolver")

const app = express();
const FOUND = 302;

const strategy = { '.json': jsonRedirectionRules }

const rules = strategy[ruleFileExtension]

app.get('/', (req, res) => {
    const host = req.headers.host;
    console.log(`host is ${ host } rule is ${ rules[host] }`)
    res.redirect(FOUND, rules[host]);
});

app.listen(80);