const express = require('express');
const router = express.Router();
const models = require('../models/index.js');
const session = require('express-session');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
// const uuid = require('uuid/v4');
// const FileStore = require('session-file-store')(session);
// const bodyParser = require('body-parser');


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

    const saltRounds = 10;
    const bla = bcrypt.hashSync(response.usPass, saltRounds);

    let checkUser = await models.User.checkInfo(
        response.usName,
        response.usEmail,
        bla);

    if (checkUser.length === 0) {
        await models.User.create({
            name: response.usName,
            email: response.usEmail,
            password: bla,
        });
        res.send("Success");
    }
        // else {
    //     alert('Sorry, such user already exists');
    // }
});

// const saltRounds = 10;
// // const users = [
// //     { id: '2f24vvg', email: 'test@test.com', password: 'password' }
// // ];
//
// const hash = bcrypt.hashSync(users[0].password, saltRounds);

router.get('/signin', function(req, res) {
    res.render('entries/signin');
});

router.post('/signin/new', async function(req, res) {
    let response = await res.json();
    let checkUser = await models.User.checkInfo(
        response.usName,
        response.usEmail,
        response.usPass);


    if (check.length === 1){
        userId = checkUser[0].dataValues.id;
        userEmail = checkUser[0].dataValues.email;

        res.redirect('/account')
    }
});

// const saltRounds = 10;
// // const users = [
// //     { id: '2f24vvg', email: 'test@test.com', password: 'password' }
// // ];
//
// const hash = bcrypt.hashSync(users[0].password, saltRounds);
//
// passport.use(new LocalStrategy(
//     { usernameField: 'email' },
//     (email, password, done) => {
//         console.log('Inside local strategy callback');
//         // here is where you make a call to the database
//         // to find the user based on their username or email address
//         const foundUsers = users.filter(el => (el.email === email));
//         // no user was found
//         if(foundUsers.length === 0) {
//             return done('Error. Email not found!');
//         } else {
//             if(bcrypt.compareSync(password, hash)) {
//                 // success
//                 console.log('Local strategy returned true');
//                 return done(null, foundUsers[0]);
//             } else {
//                 return done('Error. Password not correct!');
//             }
//         }
//     }
// ));
//
// passport.serializeUser((user, done) => {
//     console.log('Inside serializeUser callback. User id is save to the session file store here');
//     done(null, user.id);
// });
//
// passport.deserializeUser((id, done) => {
//     console.log('Inside deserializeUser callback');
//     console.log(`The user id passport saved in the session file store is: ${id}`);
//     const user = users[0].id === id ? users[0] : false;
//     done(null, user);
// });
//
// // add & configure middleware
// router.use(bodyParser.urlencoded({ extended: false })); // Form data
// router.use(bodyParser.json()); // JSON
// router.use(session({
//     genid: (req) => {
//         console.log('Inside the session middleware');
//         console.log(req.sessionID);
//         return uuid(); // use UUIDs for session IDs
//     },
//     store: new FileStore(),
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 10*60*1000 }
// }));
// router.use(passport.initialize());
// router.use(passport.session());




module.exports = router;






