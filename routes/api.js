const router = require('express').Router();
const { fetchJobs } = require('../services/indeed.js');

router.get('/', fetchJobs, (req, res)=>{
  res.json(res.results || [])

})

module.exports = router;
