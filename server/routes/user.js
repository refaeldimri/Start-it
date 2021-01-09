const multer = require('multer')
const express = require('express');
const session = require('express-session')
const MySQLStore = require('connect-mysql')(session)
const options = {config: {
            host: 'mentalqna.cybjlsqfvawm.us-east-2.rds.amazonaws.com',
            user: 'admin',
            password: 'startitil',
            database: 'mentalqna'
}}
const {db, rootPath} = require('../db');
const storageProfileImage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, rootPath + '/uploads/profiles')
    },
    filename: function (req, file, cb) {
        cb(null, req.body.nickname + 'Profile' + ".png")
    }
})
const uploadProfileImage = multer({
    storage: storageProfileImage
})
const router = express.Router();
router.use(session({
    secret: 'MentalHealthQnA',
    name: 'appName',
    resave: false,
    saveUninitialized: false,
    cookie: {
        sameSite: 'strict', // THIS is the config you are looing for.
    }, store: new MySQLStore(options)}));
router.post('/admin', (req, res)=>{res.sendFile(__dirname + '/admin.html')})
router.post('/loadProfile', (req, res) => {
    if (req.session.id) {
        console.log(req.session.id)
        db.query('SELECT * FROM user WHERE session_id = ?', [req.session.id], (err, result, fields) => {
            if (result.length > 0)
                res.json({
                    email: result[0].email,
                    nickname: result[0].nickname,
                    image: result[0].image,
                    dob: result[0].date_of_birth
                });
            else res.json({})
        })
    }
})

router.post('/login', (req, res) => {
    if (req.body.email.length > 0 && req.body.password.length > 0) {
        db.query("SELECT * FROM user WHERE email = ? AND password = ?", [req.body.email, req.body.password], (err, result, fields) => {
            console.log(result)
            if (result.length === 0) res.send({error:"login failed"})
            else {
                req.session.email = result[0].email;
                req.session.nickname = result[0].nickname
                req.session.dob = result[0].date_of_birth
                db.query("UPDATE user SET session_id = ? WHERE email = ?", [req.session.id, result[0].email], (err, result, fields) => {
                    console.log(result)
                    if (result.length === 0) res.send({})
                    else {
                        //res.redirect('/admin')
                        res.send({
                            email: req.session.email,
                            nickname: req.session.nickname,
                            dob: req.session.dob,
                            image: req.session.nickname + "Profile.png"
                        })
                    }
        
                })
            }

        })
    } else {
        res.redirect('/admin')
    }
})
router.post('/logout', (req, res) => {
    db.query("UPDATE user SET session_id = '' WHERE session_id = ?", [req.session.id], (err, result, fields) => {
        console.log(req.session.id)
        {
            req.session.email = ''
            req.session.nickname = ''
            req.session.dob = ''
        }
        res.json({isLoggedOut: true})
    })
})
router.post('/signup', uploadProfileImage.single('file'), (req, res, next) => {
    db.query("INSERT INTO user VALUES(?, ?, ?, ?, ?, ?)",
        [req.body.email, req.body.nickname, req.body.dateofbirth, req.file ? req.body.nickname + "Profile.png" : "", req.body.password, req.session.id],
        (err, results, fields) => {
            if (results)
                req.session.email = req.body.email
            res.redirect('/')
        })
})

module.exports = router;