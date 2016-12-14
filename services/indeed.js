const fetch = require('node-fetch');
const API_URL = 'http://api.indeed.com/ads/apisearch?';
const API_KEY = process.env.API_KEY;


// This function will be called on pageload to fetch all data from the nomadlist api.
// It will then reset the state of cities to this data object
function fetchJobs(req, res, next){

  fetch(`http://api.indeed.com/ads/apisearch?publisher=4336071170440761&q=javascript&l=new+york%2C+ny&sort=&format=json&radius=25&st=web+developer&jt=fulltime,partime&start=&limit=8&fromage=5&filter=1&latlong=1&co=us&v=2`)
   .then(r => r.json())
   .then((results) => {
    console.log('********', results)
    res.results = results;
    next();
  })
  .catch((error) => {
      console.log("Error is ", error);
      res.error = error;
      next();
  });
};


module.exports = {
  fetchJobs
}
// 4336071170440761
  // fetch('{API_URL}?publisher=${API_KEY}')
