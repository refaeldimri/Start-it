import react, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../contact.css'

class Donation extends Component {
    render(){
  return (
    <Router>    
        <div className="container-fluid bg-white" style={{height:25}}></div>
    <div className="container bg-light" style={{height:400}}>
      <div className="row">
      <div className="col bg-dark" style={{height:400}}></div>
      <div className="col bg-light" style={{height:400}}>          
      <form>
                <h1 class="text-center text-danger font-weight-bold ">תרום לנו</h1>
                <br></br>
                <input class="content-center text-right" type="number" placeholder="סך התרומה"/>
                <button>תרום לנו</button> 

      </form>
      </div>
        </div>
        </div>

        </Router>
  )
    }
}

export default Donation;
