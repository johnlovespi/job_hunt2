const express = require('express');
const router = express.Router();
const { createJobs, getJobs } = require('../models/jobs')

router.get('/', getJobs, (req, res) => {
  res.json(res.rows);
})

router.post('/', createJobs,(req,res)=> {
 res.json(res.rows);
});

module.exports = router;
