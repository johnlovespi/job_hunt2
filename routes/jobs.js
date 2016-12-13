const express = require('express');
const router = express.Router();
const { createJobs, getAllJobs, deleteJobs } = require('../models/jobs.js')


router.get('/', getAllJobs,(req, res) => {
  console.log(res.jobs)
  res.json(res.jobs || []);
});

router.post('/', createJobs,(req,res)=> {
 res.json(res.rows);
});


router.delete('/', deleteJobs,(req,res)=>{
 res.json({ message: 'Successfully Deleted' });


})


module.exports = router;
