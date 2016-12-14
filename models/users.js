const db = require('../lib/dbConnect.js');

function createUser(req, res, next) {
  console.log(req.body)
  db.none('INSERT INTO users (username, password) VALUES ($1, $2);',
    [req.body.username, bcrypt.hashSync(req.body.password, salt)])
    .then( () => {
      console.log('user created!')
      next()
    })
  .catch(error => console.log(error))
}



function authenticate(req, res, next) {
  console.log(req.body.password)
  db.one('SELECT * FROM users WHERE name = $/name/;', req.body)
    .then((data) => {
      console.log(data.password)
      const match = bcrypt.compareSync(req.body.password, data.password);
      if (match) {
        const myToken = jwt.sign({ name: req.body.name }, process.env.SECRET);
        res.status(200).json(myToken);
      } else {
        res.status(500).send('fuck u fite me irl');
      }
    })
  .catch(error => console.log(error))
}


module.exports ={ authenticate, createUser};

  // if(res.rows.password === req.body.password){
  //   next();
  // }
