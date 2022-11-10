const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');

const app = express();

//init middleware
// app.use(logger);


//handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
appset('view engine', 'handlebars');



//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//hompage route
app.get('/', (req, res) => res.render('index',{
    title: 'Member App',
    members
}));

//set static folder
app.use(express.static(path.join(__dirname, 'public')));
//members api route
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
