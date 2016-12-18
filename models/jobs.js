const db = require('../lib/dbConnect.js');


function getAllJobs(req, res, next) {
  db.any('SELECT * FROM jobs;')
  .then((jobs) => {
    res.jobs = jobs;
    next();
  })
  .catch(error => next(error));
}

//went from many to any

function createJobs(req,res,next){
  console.log('asf');
  db.none(`INSERT INTO jobs (name, title, descripition, url, contact, phone) VALUES ($1, $2, $3, $4, $5, $6)`,
    [
    req.body.name,
    req.body.title,
    req.body.descripition,
    req.body.url,
    req.body.contact,
    req.body.phone])
    .then((data) => res.rows = data)
    .then(() => next())
    .catch((err)=>{
      console.log(err);
      next(err);
    });
}

function deleteJobs(req,res,next){
db.any(`DELETE FROM jobs WHERE id = $1;`[req.params.id])
 .then(next())
 .catch(err => next(err));

}

// function search




module.exports = {
  createJobs,
  getAllJobs,
  deleteJobs
};
