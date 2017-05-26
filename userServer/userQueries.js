var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/';
var db = pgp(connectionString);

module.exports = {
  createUser: createUser,
};

function createUser (req, res, next) {
  db.done('insert into user(username, password)' +
  'values(${username}, ${password}', req.body)
  .then(() => {
    res.status(200)
      .json({
        status: 'success',
        message: 'Inserted one user'
      });
  })
  .catch((err) => {
    return next(err);
  });
}