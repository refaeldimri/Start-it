import react, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../contact.css'
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';

class Information extends Component {
    render(){
  return (
    <Router>
      <br/>
        <h1 class="text-danger fs-4 text-center font-weight-bold font-italic px-2">
          יש מקרים שמצריכים סיוע מחוץ למסך
        </h1>
        <br>
        </br>


        <div className="row">
            <div className="col-sm-4 ">
              <div>
              <a href="https://www.eran.org.il/">
                 <img src={pic3} class="float-right px-5" alt=""></img> 
                 </a>     
              </div>
            </div>

            <div className="col-sm-4">
              <div>
              <a href="https://www.milam.org.il/">
                 <img src={pic4} class="float-right py-3" alt=""></img>
              </a>
              </div>  
            </div>
          </div>
       
   
        </Router>
  )
    }
}

export default Information;
