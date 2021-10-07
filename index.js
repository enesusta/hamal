import express from 'express';

const app = express();

const redirectionRule = {
    "gw": "https://discovery-indexing-contentgw-service.moon.trendyol.com"
}

const FOUND = 302

app.get('/', (req, res) => {
    const host = req.headers.host;
    res.redirect(redirectionRule[host], FOUND);
});

app.listen(80)