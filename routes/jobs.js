const express = require('express');
const router = express.Router();
const { createJobs } = require('../models/jobs')



router.post('/', createJobs,(req,res)=> {
  res.status(200).end();
});

module.exports = router;
