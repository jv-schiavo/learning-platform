let express = require(`express`);
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('pages/home');
});

app.get('/courses', (req,res) => {
    res.render('pages/courses');
});

app.get('/instructors', (req,res) =>{
    res.render('pages/instructors');
});

app.get('/events', (req,res) =>{
    res.render('pages/events');
});

app.get('/contact', (req,res) =>{
    res.render('pages/contact');
});

app.listen(5000);