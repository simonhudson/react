const path = require('path');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const PORT = 4000;
const app = express();

app.engine('hbs', expressHandlebars({
	defaultLayout: 'default',
	extname:'hbs',
	layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views/pages'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, (err) => {
	if (err) return console.log('something bad happened', err);
	console.log(`server is listening on ${PORT}`);
	app.get('/', (req, res) => {
		res.render('home');
	});
})
