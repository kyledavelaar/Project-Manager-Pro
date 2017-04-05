const User = require('../models/userModel');


module.exports = {
    create: function (req, res) {
    User.create({ username: req.body.username, password: req.body.password }, (err, result) => {
        if (err) console.log(err)
        else {
            //FIX THIS ROUTE PLEASE
            res.status(200).send(true);
        }
    })
}

}
// function create(req, res) {
//     User.create({ username: req.body.username, password: req.body.password }, (err, result) => {
//         if (err) console.log(err)
//         else {
//             //FIX THIS ROUTE PLEASE
//             res.status(200).redirect('/project');
//         }
//     })
// }

function logIn(req, res) {
    User.findOne({ username: req.body.username }, (err, result) => {
        if (!result || result.password !== req.body.password) {
            return res.status(404).send({
                message: 'User Not Found',
            });
        } else {
            return res.status(200).send(true);
        }
    });
}

function deleteAccount(req, res) {
    User.find({ username: req.body.username }, (err, user) => {
        if (err) console.log(err)

        user.remove((err => {
            if (err) console.log(err);
            else console.log('User successfully deleted!');
        }))
    });
}

function updatePassword(req, res) {
    User.findOneAndUpdate({ password: req.body.currentPassword }, { password: req.body.newPassword }, (err, result) => {
        if (err) console.log(err);
        else res.status(200)
    });
}