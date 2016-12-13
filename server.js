'use strict';
require('dotenv').config({ silent: true });
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const cookieParser  = require('cookie-parser');
// const usersRouter   = require('./routes/users');
const authRouter    = require('./routes/auth');


const jobsRouter = require('./routes/jobs.js');

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(logger('dev'));

app.listen(PORT, () => console.log('Server is listening on port', PORT));


app.use('/db/job_hunt2', jobsRouter);
// app.use('/users', usersRouter)
app.use('/auth', authRouter)
