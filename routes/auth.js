const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('../lib/passportStrategy');
const SECRET = 'kingsCup'
const { createUser, authenticate } = require('../models/users');
// initialize passport
router.use(passport.initialize());

// handle all the routes
// router.post('/', findByUsername, (req, res) => {
//  res.json(res.rows)
//   });


router.route('/signup')
  .post(createUser, (req, res, next) => res.json({message: 'user succesfully signed up'}));

router.route('/login')
  .post(authenticate, (req, res, next) => res.json({message: 'user succesfully logged in'}));


module.exports = router;

// passport.authenticate('local', { session: false }),
