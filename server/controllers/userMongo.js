const User = require('../models/userModel');


const userController = {

  createUser(req, res) {
    User.create({
      username: req.body.username,
      password: req.body.password,
    }, (err, result) => {
      if (err) console.log(err);
      res.send(result);
    })
  },

  verifyUser(req, res) {
    User.findOne({ username: req.body.username }, (err, result) => {
      console.log('REQ BODY', req.body);
      console.log('RESULT OF SERVER FINDING USERNAME', result);
      if (result === null) {
        return res.send(false);
      } else {
        if (result.password === req.body.password) {
          return res.send(true);
        } else {
          return res.send(false);
        }
      }
    })
  }

}

module.exports = userController;


//     create (req, res) {
//     User.create({ username: req.body.username, password: req.body.password }, (err, result) => {
//         if (err) console.log(err)
//         else {
//             //FIX THIS ROUTE PLEASE
//             res.status(200).send(true);
//         }
//     })
// }

//}
// function create(req, res) {
//     User.create({ username: req.body.username, password: req.body.password }, (err, result) => {
//         if (err) console.log(err)
//         else {
//             //FIX THIS ROUTE PLEASE
//             res.status(200).redirect('/project');
//         }
//     })
// }

// function logIn(req, res) {
//     User.findOne({ username: req.body.username }, (err, result) => {
//         if (!result || result.password !== req.body.password) {
//             return res.status(404).send({
//                 message: 'User Not Found',
//             });
//         } else {
//             return res.status(200).send(true);
//         }
//     });
// }




// function deleteAccount(req, res) {
//     User.find({ username: req.body.username }, (err, user) => {
//         if (err) console.log(err)

//         user.remove((err => {
//             if (err) console.log(err);
//             else console.log('User successfully deleted!');
//         }))
//     });
// }

// function updatePassword(req, res) {
//     User.findOneAndUpdate({ password: req.body.currentPassword }, { password: req.body.newPassword }, (err, result) => {
//         if (err) console.log(err);
//         else res.status(200)
//     });
// }
