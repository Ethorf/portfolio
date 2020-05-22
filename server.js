const path = require('path');
const express = require('express');
const compression = require('compression');
const app = express();
const publicPath = path.join(__dirname, '..', 'portfolio/client/public');
const PORT = process.env.PORT || 8080;
app.use(compression());
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});
