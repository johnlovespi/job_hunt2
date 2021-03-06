const express = require('express');
const router = express.Router();
const db = require('../lib/dbConnect.js');
const { createJobs, getAllJobs, deleteJobs } = require('../models/jobs.js')


router.get('/', getAllJobs,(req, res) => {
  console.log(res.jobs)
  res.json(res.jobs || []);
});

router.post('/post', createJobs,(req,res)=> {
 res.json(res.rows);
});



router.delete('/:id', deleteJobs,(req,res)=>{
  res.json(res.rows);
  res.json({ message: 'Successfully Deleted' });
})


module.exports = router;
