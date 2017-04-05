var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/';
var db = pgp(connectionString);

module.exports = {
  // getAllPuppies: getAllPuppies,
  // getSinglePuppy: getSinglePuppy,
  createUser: createUser,
  // updatePuppy: updatePuppy,
  // removePuppy: removePuppy
};

// function getAllPuppies(req, res, next) {
//   db.any('select * from pups')
//     .then(function(data) {
//       res.status(200)
//         .json({
//           status: 'success',
//           data: data,
//           message: 'Retrieved All puppies'
//         });
//     })
//     .catch(function(err) {
//       return next(err);
//     })
// }

// function getSinglePuppy(req, res, next) {
//   var pupID = parseInt(req.params.id);
//   db.one('select * from pups where id = $1', pupID)
//     .then(function(data) {
//       res.status(200)
//         .json({
//           status: 'success',
//           data: data,
//           message: 'got one puppy'
//         });
//     })
//     .catch(function(err) {
//       return next(err);
//     });
// }

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