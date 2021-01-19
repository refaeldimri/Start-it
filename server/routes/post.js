const multer = require('multer')
const express = require('express');
const session = require('express-session')
const MySQLStore = require('connect-mysql')(session)
const {
    db,
    rootPath
} = require('../db');
const options = {
    config: {
        host: 'mentalqna.cybjlsqfvawm.us-east-2.rds.amazonaws.com',
        user: 'admin',
        password: 'startitil',
        database: 'mentalqna'
    }
}
const storagePostImage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, rootPath + '/uploads/posts')
    },
    filename: function (req, file, cb) {
        let time = new Date();
        let fileString = time.getFullYear() + time.getMonth() + time.getDate() + time.getHours() + req.body.title + req.session.nickname;
        cb(null, +fileString + ".png")
    }
})
const uploadPostImage = multer({
    storage: storagePostImage
})
const router = express.Router();
router.use(session({
    secret: 'MentalHealthQnA',
    name: 'appName',
    resave: false,
    saveUninitialized: false,
    cookie: {
        sameSite: 'strict',
    },
    store: new MySQLStore(options)
}));

router.post('/addPost', uploadPostImage.single('file'), (req, res, next) => {
    console.log(req.body)
    let time = new Date();
    let fileString = time.getFullYear() + time.getMonth() + time.getDate() + time.getHours() + req.body.title + req.session.nickname;
    db.query("INSERT INTO posts(title, content, image_file_name, category, userid, date_published) VALUES(?, ?, ?, ?, ?, ?)", [req.body.title, req.body.content, fileString + ".png", req.body.category, req.session.userid, new Date()])
    res.redirect('http://localhost:3000/mentalChallengers')
})

router.post('/getPost', (req, res) => {
    let response = {}
    let postquery = "SELECT * FROM posts WHERE id = ?"
    let commentsquery = "SELECT * FROM comments WHERE postid = ?"
    db.query(postquery, [req.body.postid], (err, result, fields)=>{
        response.post = result
        console.log(result)
        db.query(commentsquery, [result[0].id], (err, results, fields)=>{
            console.log(results)
            response.comments = results
            res.json(response)
        })
    })
})
router.post('/getPosts', (req, res) => {
    let query = "SELECT posts.id, posts.title, posts.content, posts.image_file_name as post_image, posts.category, posts.userid, users.nickname, users.image_file_name as user_image FROM posts JOIN users ON posts.userid = users.userid WHERE posts.category = ?"
    db.query(query, [req.body.category], (err, results, fields) => {
        res.send(results);
    })
})
router.post('/addComment', (req, res) => {
    if(req.session.email.length < 1) res.send({})
    else{
        let query = "INSERT INTO comments(postid, content, userid) VALUES(?, ?, ?)"
        console.log(req.body)
        db.query(query, [req.body.postid, req.body.commentContent, req.session.userid], (err, result, fields)=>{
            console.log(result)
            res.send({result: "comment added"})
        })
    }
    
})
router.post('/getComments', (req, res) => {

})
module.exports = router;