const express = require('express');


const app = express();

app.use(express.static('./dist/MotoFreaksFrontend'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/MotoFreaksFrontend/'}),
);

app.listen(process.env.PORT || 8080);
