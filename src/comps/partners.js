import react, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../contact.css'
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';

class Partners extends Component {
    render(){
  return (
    <Router>
        <h1 class="text-center font-weight-bold font-italic px-2">השותפים שלנו</h1>
        <br></br>
          <div className="row">
            <div className="col-sm-4 ">
              <div>
                <img src={pic1} class="float-right" alt=""></img>      
              </div>
            </div>

            <div className="col-sm-4 ">
              <div>
                <img src={pic2} class="float-right" alt=""></img>
              </div>  
            </div>
          </div>

          <div className="containerCon bg-light">
            <div className="row text-right font-weight-bold font-italic px-2">
              <div className="col-6">
                <br></br>
             
                <h2>חושבים שנוכל לעזור לכם?  </h2>
                <h2> יש לכם רעיון לשיתוף פעולה? כתבו לנו</h2>  
                <br></br> 
                </div>

              <div className="col-6">
              <br></br>
                <div class="input-group input-group-lg">
                  <div class="input-group-prepend"></div>
                  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="שם מלא"/>
                </div>
                <br></br>

                <div class="input-group input-group-lg">
                  <div class="input-group-prepend"></div>
                  <input type="Email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="שם מלא" placeholder="דוא''ל"/>
                </div>
                <br></br>

                <div class="input-group input-group-lg">
                  <div class="input-group-prepend"></div>
                  <input type="tel" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="שם מלא" placeholder="טלפון"/>
                </div>

                <br></br><br></br>

                
            <textarea type="text" rows="10" cols="84" placeholder="כיצד נוכל לעזור לכם?"></textarea>     
            <br></br><br></br>                           
            <button>שלח למערכת</button>
             
              </div>
            </div>

          </div>
          

        </Router>
  )
    }
}

export default Partners;
    
