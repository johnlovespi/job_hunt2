const router = require('express').Router();
const { fetchJobs } = require('../services/indeed.js');

router.get('/', fetchJobs,(req,res)=>{
  res.render('results', {
    results: res.results || []
  })

})

module.exports = router;
