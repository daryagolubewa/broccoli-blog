const express = require('express');
const router = express.Router();
const models = require('../models/index.js');


router.get('/', function (req, res) {
    res.redirect('/entries');
});

router.get('/', function (req, res) {
    res.render('index');
});

router.get('/entries', function (req, res) {
    res.render('entries');
});

router.get('/signup', function (req, res) {
    res.render('entries/signup');
});

router.post('/signup', async function (req, res) {
    let response = req.body;
    let checkUser = await models.User.checkInfo(
        response.usName,
        response.usEmail,
        response.usPass);

    if (checkUser.length === 0) {
        await models.User.create({
            name: response.usName,
            email: response.usEmail,
            password: response.usPass,
        });
        // res.redirect('/entries');
        res.send("Success");
    }
});


// router.get('/signin', function(req, res) {
//     res.render('entries/signin');
// });
//
// router.post('/signin/new', async function(req, res) {
//     let response = await res.json();
//     let checkUser = await models.User.checkInfo(response.usName, response.usEmail, response.usPass);
//
//     if(checkUser.length === 0) {
//         await models.User.create({name: response.usName, email: response.usName, password: response.usPass});
//     }
//
//     if (check.length === 1){
//         userId = checkUser[0].dataValues.id;
//         userEmail = checkUser[0].dataValues.email;
//
//         res.redirect('/account')
//     }
// });


module.exports = router;







