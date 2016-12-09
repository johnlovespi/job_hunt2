const db = require('../lib/dbConnect.js');

function createJobs(req,res,next){
  db.one(`INSERT INTO jobs(name, title, descripition, url, contact, phone) values($1, $2, $3, $4, $5, $6)`, [
    req.body.name,
    req.body.title,
    req.body.descripition
    ,req.body.url,
    req.body.contact,
    req.body.phone])
    .then((data)=> res.rows = data)
    .then(()=> next())
    .catch((err)=>{
      console.log(err);
      next(err);
    });
}

module.exports = {
  createJobs
};
