/* eslint-disable react/style-prop-object */
import react, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from './register';
import '../login.css'


class Login extends Component {
    render(){
  return (
    <Router>
      <div className="container1 bg-white" style={{height:25}}></div>
    <div className="container bg-dark" style={{height:550}}>
    <div className="row bg-dark text-danger" style={{height:550}}>
    <div className="L bg-dark col"></div>
        <div className="login bg-light col " >
            <form>
                <h1 class="font-weight-bold">התחברי</h1>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <p class="font-italic"><a href="#">שחכתי סיסמא</a></p>
                <button>התחברי לאתר</button> 
                <label class="font-weight-bold">או</label>  
                <button>התחברי עם פייסבוק</button> 
            </form>
        </div>
        </div>
  </div>  
  </Router>

  )
    }
}

export default Login;
