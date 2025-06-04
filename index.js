let express = require(`express`);
let path = require('path');
const db = require('./models/db');
const port = 5000;
let app = express();

//Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));


//Routes

const homeRoute = require('./routes/home');
app.use('/', homeRoute);

const courseRoute = require('./routes/courses');
app.use('/courses', courseRoute)

const apiCoursesRoutes = require("./routes/api_courses");
app.use("/api/courses", apiCoursesRoutes);


const instructorsRoute = require('./routes/instructors');
app.use('/instructors', instructorsRoute);

const liveEventsRoute = require('./routes/liveEvents');
app.use('/liveEvents', liveEventsRoute);

const faqsRoute = require('./routes/faqs');
app.use('/faq', faqsRoute);

const contactRoute = require('./routes/studentContact');
app.use('/contact', contactRoute);


// Start Server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});