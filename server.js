let bodyParser = require('body-parser');
let express = require('express');
const expHbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;
const artRouter = require('./routes/articles.js');
const prodRouter = require('./routes/products.js');

let app = express();

const hbs = expHbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.use(bodyParser.urlencoded({ extended: true }));

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use('/articles', artRouter);
app.use('/products', prodRouter);








const server = app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});