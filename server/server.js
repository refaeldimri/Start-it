const express = require("express");
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express();
const userRoutes = require('./routes/user.js')
const postRoutes = require('./routes/post.js')
const port = 3001;
app.use(express.static(__dirname + '/uploads/profiles'));
app.use(express.static(__dirname + '/uploads/posts'));
app.use(cors())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/userRoutes', userRoutes)
app.use('/postRoutes', postRoutes)
app.listen(port, () => console.log("litening on port " + port));



app.get('/', (req, res) => {
    res.redirect('http://localhost:3000/');
})

app.post('/test', (req, res)=>{
    console.log(req)
    res.json({testString: "if you see this in the frontend, then the communication with the server is working!"})
})
app.get('/admin', (req, res)=>{res.sendFile(__dirname + '/admin.html')})

app.get('/addpost', (req, res)=>{
    res.sendFile(__dirname + '/posts.html')
})
app.get('/displayPost', (req, res)=>{
    res.sendFile(__dirname + '/displaypost.html')
})




