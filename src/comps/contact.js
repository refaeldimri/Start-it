import react, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../contact.css'

class Contact extends Component {
    render(){
  return (
    <div className="container">
    <div className="noneL">


    </div>
    <div className="contact">
        <form>
            <h1>צור קשר</h1>
            <label>,מוזמנים לשלוח אלינו הערות, הארות</label>
            <label>...טענות, הצעות לשיתופי פעולה ועוד</label>
            <label>:אנא סמנו את נושא הפנייה</label>

            <select>    
             <option value="a">a</option>
             <option value="b">b</option>
             <option value="c">c</option>
             <option value="d">d</option>
            </select>

            <input type="text" placeholder="Name" />
            <input type="Email" placeholder="E-mail" />
            <input type="text" placeholder="Topic" />
            <br></br><br></br>

            <textarea type="text" rows="10" cols="36" placeholder="Content"></textarea>     
            <br></br><br></br>                           
            <button>שלח למערכת</button>
        </form>
    </div>

    <div className="noneR">
        
    </div>
</div>  
  )
    }
}

export default Contact;
