/* eslint-disable no-unused-vars */
import react, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './login';
import Contact from './contact';
import '../register.css'

class Register extends Component {
    render(){
  return (
    <Router>
      <div className="container-fluid bg-white" style={{height:25}}></div>
     <div className="container bg-light" style={{height:700}}>
     <div className="row">
     
     <div className="col bg-light" style={{height:700}}>
     <form action="http://localhost:3001/userRoutes/signup" method="POST" enctype="multipart/form-data">

                <h1 class="text-center text-danger font-weight-bold bg-">הירשמי</h1>
                <div class="input-group input-group-sm mb-2">
                <input type="email" name="email" id="email" placeholder="אימייל" />
                <input type="text" name="nickname" id="nickname" placeholder="כינוי" />
                <input type="date" name="dateofbirth" id="dateofbirth" placeholder="תאריך לידה" />
                <input type="file" name="file" id="file" />
                <input type="password" name="password" id="password" />
                <input type="checkbox"/>
                </div>

                <p class="text-center font-italic">
                לפי חוקי הפרטיות בישראל כל אדם מתחת
                לגיל 18 חייב להירשם באמצעות
                הורה\אפוטרופוס. אם את מתחת לגיל 18
                ויש לך אישור מהורה\אפוטרופוס, אנא
                סמני את המשבצת והמשיכי בהרשמה
                </p>
                  <input type="checkbox"/>
                  <p>קראתי את
                  <a href ="#"> התקנון ומדיניות הפרטיות והשימוש במידע  </a>
                  ואני מסכימה להם </p>   
                  <button type="submit" id="signup">הירשם\י</button>
                  <label class="font-weight-bold">או</label>  
                <button>התחברי עם פייסבוק</button> 
                <p class="text-center font-italic">?כבר יש לך חשבון</p>
                <p class="text-center font-italic"><a href="#">התחברי עכשיו</a></p>
            </form>
            </div>
            <div className="col bg-dark" style={{height:700}}></div>
            </div>
        </div>

  </Router>  

  )
    }
}

export default Register;