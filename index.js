let express = require(`express`);
let path = require('path');

const port = 5000;
let app = express();

//Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Routes
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

app.get('/faq', (req,res) =>{
    res.render('pages/faq');
});

app.get('/contact', (req,res) =>{
    res.render('pages/contact');
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});