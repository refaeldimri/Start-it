/* eslint-disable no-unused-vars */
import react, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './login';
import Contact from './contact';

class Register extends Component {
    render(){
  return (
    <Router>
    <div className="container">
        <div className="noneL">

        </div>
        <div className="register">
            <form>
                <h1>הירשמי</h1>
                <input type="text" placeholder="Nick name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="date" placeholder="Date of birth" />
                <input type="checkbox"/>

                 <label>לפי חוקי הפרטיות בישראל כל אדם מתחת</label>
                 <label>לגיל 18 חייב להירשם באמצעות</label>
                 <label>הורה\אפוטרופוס. אם את מתחת לגיל 18</label>
                 <label>ויש לך אישור מהורה\אפוטרופוס, אנא</label>
                 <label>סמני את המשבצת והמשיכי בהרשמה </label>
                 <br></br>

                  <input type="checkbox"/>
                  <label> קראתי את</label>
                  <a href="#">התקנון ומדיניות הפריטיות השימוש במידע </a>
                 <label>ואני מסכימה להם</label>
                
                  <button>הירשמי לאתר</button>
                  <label>או </label>
                  <button>התחברי עם פייסבוק</button>

                  <label> ?כבר יש לך חשבון</label>
                  <label><a href="#">התחברי עכשיו</a></label>
            </form>
        </div>

        <div className="noneR">               
        </div>
  </div>
  </Router>  

  )
    }
}

export default Register;