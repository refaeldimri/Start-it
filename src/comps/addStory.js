import react, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../contact.css'

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";



class AddStory extends Component {
    render(){
  return (
    <Router>
          <div className="containerCon bg-light">

            <div className="row text-right font-weight-bold font-italic px-2">
              <div className="col">
              <br/>
                <h2 className="text-center text-danger">העלו פוסט</h2>  
              </div>
            </div>
            <br/>

            <div className="row text-right font-weight-bold font-italic px-2">
            <div className="col-3">
            </div>

            <div className="col-6">

                <div className="row text-right font-weight-bold font-italic px-2">
                    <div className="col-3"></div>
                    
                    <div className="col-6">
                    <div>
                    <DropdownButton className="ml-10" id="dropdown-basic-button" title="קהילות">
                        <Dropdown.Item className="text-right" href="#">מתמודדי נפש</Dropdown.Item>
                        <Dropdown.Item className="text-right" href="#">הורים</Dropdown.Item>
                        <Dropdown.Item className="text-right" href="#">בני ובנות זוג</Dropdown.Item>
                        <Dropdown.Item className="text-right" href="#">אחים ואחיות</Dropdown.Item>
                        <Dropdown.Item className="text-right" href="#">ילדי מתמודדים</Dropdown.Item>
                        <Dropdown.Item className="text-right" href="#">קרובים וחברים</Dropdown.Item>              
                    </DropdownButton>
                </div> 
                    </div>

               </div>
            

                    <div className="col-3"></div>
                
                <div/>
                <div class="input-group input-group-lg">
                    <div class="input-group-prepend"></div>
                        <input type="text" class="form-control" 
                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="כותרת"/>
                        <br/><br/><br/>
                </div>
                <div class="form-group"> <textarea class="form-control" placeholder="תקציר"
                    id="exampleFormControlTextarea1" rows="6"></textarea> 
                </div>
                    <button>שלח למערכת</button>
                </div>

            <div className="col-3">
            </div>

          
          </div>
          </div>

         
          

        </Router>
  )
    }
}

export default AddStory;
    
