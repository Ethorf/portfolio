const express = require('express');
// const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
// app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static('./client'));
app.use(express.static(path('./client')));
app.get('/ping', function(req, res) {
	return res.send('pong');
});
app.get('/*', function(req, res) {
	res.sendFile(path.join('./client/', 'public/', 'index.html'));
});
app.listen(port);