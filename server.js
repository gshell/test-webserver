const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname +'/public'));

hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
})

app.get('/',(req, res) =>{
    // res.send('<h1>Hello from Express</h1>');
    res.render('home.hbs', {
        title: 'Welcome to the Gshell Co. Home page',
        mssg: 'Tempor reprehenderit sunt nulla in dolor.'
    });
});

app.get('/about', (req,res)=> {
    res.render('about.hbs',{
        pageTitle: 'About Page'
    });
});

app.get('/bad',(req,res)=>{
    res.send({
        errorMessage: 'Unable to Handle Request'
    });
});


app.listen(3000);