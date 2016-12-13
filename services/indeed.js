const fetch = require('node-fetch');
const API_URL = 'http://api.indeed.com/ads/apisearch?';
const API_KEY = process.env.API_KEY;


// This function will be called on pageload to fetch all data from the nomadlist api.
// It will then reset the state of cities to this data object
function fetchJobs(req, res, next) {
  console.log('service: fetch all cities')
  fetch('http://api.indeed.com/ads/apisearch?publisher=${API_KEY}&q=javascript&l=new+york%2C+ny&sort=&radius=25&st=web+developer&jt=&start=&limit=6&fromage=&filter=1&latlong=1&co=us&v=2')
  // fetch('{API_URL}?publisher=${API_KEY}')
  .then(r => r.json())
  .then((results) => {
    res.results = results;
    next();
  })
  .catch(err => console.log(err));
}


module.exports = {
  fetchJobs
}
// 4336071170440761
