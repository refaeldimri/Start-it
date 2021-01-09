import react, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../contact.css'

class Contact extends Component {
    render(){
  return (
    <Router>
    <div className="container-fluid bg-white" style={{height:25}}></div>
    <div className="container bg-light" style={{height:720}}>
    <div className="row">
    
    <div className="col bg-light" style={{height:720}}>
        <form>
            <h1 class="text-center text-danger font-weight-bold bg-">צור קשר</h1>
            <p class="text-center font-italic">מוזמנים לשלוח אלינו הערות, הארות,
            טענות, הצעות לשיתופי פעולה ועוד
            </p>
            <p class="text-center font-italic">
             :אנא סמנו את נושא הפנייה
            </p>

            <select>    
             <option value="a">a</option>
             <option value="b">b</option>
             <option value="c">c</option>
             <option value="d">d</option>
            </select>
            <br></br>

            <input type="text" placeholder="Name" />
            <input type="Email" placeholder="E-mail" />
            <input type="text" placeholder="Topic" />
            <br></br><br></br>

            <textarea type="text" rows="10" cols="75" placeholder="Content"></textarea>     
            <br></br><br></br>                           
            <button>שלח למערכת</button>
        </form>
        </div>
        <div className="col bg-dark" style={{height:720}}></div>
        </div>
        </div>
        </Router>
  )
    }
}

export default Contact;
