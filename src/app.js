const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
// const rateLimit = require('express-rate-limit');

const errorHandler = require('./middleware/error');
const dbConnect = require('./db/dbConnect');
const { validateUserActivity } = require('./utils/cronjob');

//Run cronjob to validate user activity;
validateUserActivity();

//coloring the log attached to String.prototype
require('colors');

//Load env vars according to NODE_ENV
if (process.env.NODE_ENV === 'development')
  dotenv.config({ path: './config/dev.env' });
else if (process.env.NODE_ENV === 'production')
  dotenv.config({ path: './config/prod.env' });

//Connect to mongoDB instance
dbConnect();

//Route files
const auth = require('./routes/auth');
const employee = require('./routes/employee');
const fileUpload = require('./routes/fileUpload');
const admin = require('./routes/admin');
const ejs = require('./routes/ejs');
const jobPosting = require('./routes/jobPosting');

//Initializing express app object
const app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Logging middleware
app.use(require('morgan')('dev'));

//Body parser for parsing form data
app.use(express.urlencoded({ extended: true }));

//Body parser for parsing json
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Set security headers
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// Sanitize data
app.use(mongoSanitize());

// Prevent XSS attacks
app.use(xss());

//Trust reverse proxy for heroku, nginx
app.set('trust proxy', 1);

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

// Serve static for ejs templates
app.use(express.static(path.join(__dirname, 'public')));

//Mount routers
app.use('/api/auth', auth);
app.use('/api/employee', employee);
app.use('/api/file', fileUpload);
app.use('/api/admin', admin);
app.use('/api/ejs', ejs);
app.use('/api/job-posting', jobPosting);

//Serve react client app to production
if (
  process.env.NODE_ENV === 'staging' ||
  process.env.NODE_ENV === 'production'
) {
  app.use(express.static(`${__dirname}/../client/build`));

  app.use('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '..', 'client', 'build', 'index.html')
    );
  });
}

//Error Handling Middleware
app.use(errorHandler);

module.exports = app;
