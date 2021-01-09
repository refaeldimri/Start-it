const express = require("express");
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express();
const userRoutes = require('./routes/user.js')
const port = 3001;
app.use(express.static(__dirname + '/uploads/profiles'));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/userRoutes', userRoutes)




app.get('/', (req, res) => res.sendFile(__dirname + '/admin.html'));

app.post('/test', (req, res)=>{
    res.send({testString: "if you see this in the frontend, then the communication with the server is working!"})
})


app.get('/admin', (req, res)=>{res.sendFile(__dirname + '/admin.html')})



app.listen(port, () => console.log("litening on port " + port));
