const express = require('express');
const exphbs = require('express-handlebars');
const axios = require("axios")
const app = express();

// axios.get("http://127.0.0.1:3000/movies/index").then(function(resposta){
//     console.log(resposta.data)
// })

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})


app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');  


app.use(express.static('public'))

app.get('/', (req, res) => {

    const User = {
        'name': 'maikon'
    }

    const auth = true

    res.render('home', {User, auth});
});


app.get('/dashboard', (req, res) => {

    const items = ['item a', 'item b', 'item c']

    res.render('dashboard', {items})
})


app.get('/post', (req, res) => {

    const post = {
        title:    'Aprender node js',
        category: 'JavaScript',
        body:     'Este artigo----- bla, bla, bla',
        comments: 1,
    }

    res.render('blogpost', {post})
})


app.get('/posts', (req, res) => {
    const posts = [
        {

            title:    'Aprender node js',
            category: 'JavaScript',
            body:     'Este artigo----- bla, bla, bla',
            comments: 1,

        },
        {

            title:    'Aprender node js',
            category: 'JavaScript',
            body:     'Este artigo----- bla, bla, bla',
            comments: 2,

        }
    ]

    res.render('blog', { posts }) 
})

app.listen(5000, () => {
    console.log('App funcionando');
});
