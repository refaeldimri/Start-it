/* eslint-disable react/style-prop-object */
import react, {Component, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Register from './register';
import '../login.css'

function Login() {
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const [user, setUser] = useState();
    
      const handleSubmit = async e => {
        e.preventDefault();
        const user = { username, password };
        // send the username and password to the server
        const response = await axios.post(
        "http://blogservice.herokuapp.com/api/login",
        user
        );
        // set the state of the user
        setUser(response.data)
        // store the user in localStorage
        localStorage.setItem('user', response.data)
        console.log(response.data)
        
      };
  return (
    <Router>
    <div className="container-fluid bg-white" style={{height:25}}></div>
    <div className="container bg-light" style={{height:550}}>
      <div className="row">
      
      <div className="col bg-light" style={{height:550}}>          
      {/* <form action="http://localhost:3001/userRoutes/login" method="POST"> */}
      <form onSubmit={handleSubmit}>
                <h1 class="text-center text-danger font-weight-bold bg-">התחברי</h1>
                <br></br>

                <input class="content-center" type="email" name="email" value={username}
                 placeholder="Email" onChange={({ target }) => setUsername(target.value)}/>

                <input class="row-2" type="password" name="password" value={password} 
                placeholder="Password" onChange={({ target }) => setPassword(target.value)}/>

                <p class="font-italic"><a href="#">שחכתי סיסמא</a></p>
                <button type="submit">התחברי לאתר</button> 
                <label class="font-weight-bold">או</label>  
                <button>התחברי עם פייסבוק</button> 
      </form>
      </div>
      <div className="col bg-dark" style={{height:550}}></div>
        </div>
        </div>
  </Router>

  )
    
}

export default Login;
