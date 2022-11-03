const express = require('express');
const app = require('process');

const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
