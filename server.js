const express = require('express');
const exphbs = require('express-handlebars');


const app = express();

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');  

app.get('/', (req, res) => {

    const User = {
        'name': 'maikon'
    }

    res.render('home', {User: User});
});

app.get('/form', (req, res) => {
    res.render('formulario');
});

app.listen(3000, () => {
    console.log('App funcionando');
});
