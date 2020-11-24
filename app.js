
const express = require('express');
const app = express();
app.use(express.static(`${__dirname}/views`))
app.use(express.static(__dirname + '/public'));


app.get('/',(req, res, next) => res.sendFile(__dirname + '/views/index.html'));

app.get('/works',(req, res, next) => res.sendFile(__dirname + '/views/works.html'));

app.get('/gallery',(req, res, next) => res.sendFile(__dirname + '/views/gallery.html'));

app.get('/about',(req, res, next) => res.sendFile(__dirname + '/views/about.html'));



app.listen(4000, () => console.log("port 4000"));