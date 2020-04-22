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

app.listen(5005, '0.0.0.0', () => {
    console.log('Listening at 0.0.0.0:5005');
});
