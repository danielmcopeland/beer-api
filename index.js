const express = require('express');
const app = express();
app.use(express.urlencoded({ extened: true }));
app.use(express.json());

////////////////////////////////////


app.use('/', function(req, res) {
    res.send('Hello!');
})


////////////////////////////////////

const port = process.env.PORT || 4444;

app.listen(port);
console.log(`Listening on ${port}`);