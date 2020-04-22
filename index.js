const express = require('express');

const app = express();

app.get('/answer', (req, res) => {
    console.log('------------------------ answer', req.query);
    res
        .header('Content-Type', 'application/xml')
        .send(`<Response><Dial><Number>${req.query.To}</Number></Dial></Response>`)
        .status(200)
        .end()
});

app.get('/hangup', (req, res) => {
    console.log('------------------------ hangup', req.query);
    res.status(200).end()
});

const port = process.env.PORT || '5005';
const host = process.env.HOST || 'localhost';
app.listen(port, host, () => {
    console.log(`Listening at ${host}:${port}`);
});
