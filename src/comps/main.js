import react, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../contact.css'

class Main extends Component {
    render(){
  return (
    <Router>
        
        <h1 class="text-center text-danger">גמני</h1>
        <br></br>
        <h5 class="text-right font-weight-bold font-italic px-2">
         .גמני אמא, אבא, בן זוג, בת זוג, אח, אחות, בת, בן, קרוב, קרובה למתמודדת נפש 
         </h5>  
         <h5 class="text-right font-weight-bold font-italic px-2">
        גמני הינו אתר המיועד עבורנו – קרובי המשפחה של מתמודדי הנפש,
 זה המקום לספר את הסיפור האישי שלנו
  ולשתף אותו עם משפחות נוספות שאולי חוו חוויות דומות
        </h5>
        <h5 class="text-right font-weight-bold font-italic px-2">
        הכתיבה הינה אנונימית והיא קודם כל בשבילנו.
 זהו המקום לשתף ולפרוק בו את הדברים שאולי לא סיפרנו לאיש, להקשיב,
 לחזק, להתייעץ אחד עם השני ובעיקר להרגיש שאנחנו לא לבד
        </h5>
        <body>
        <div class="container1 px-2 bg-white" style={{height:200}}>
            <div class="row">
                <div class="col px-10">
                    <h1>pic</h1>
                </div>
   
                </div>
            </div>

            <div class="container1 px-2 bg-white" style={{height:200}}>
            <div class="row bg-light">
                    <div class="col-12">
                      <h6 class= "text-right text-danger font-weight-bold">מתמודדי נפש מספרים</h6>
                    </div>
                </div>

 
                <div class="row bg-light">
                    <div class="col">
                      <h6>pic</h6>
                    </div>
                    <div class="col">
                    <h6>pic</h6>
                    </div>
                </div>


                <div class="row bg-light">
                <div class="col-2">
                      <label class="font-italic text-left"><a href="#">לכל הסיפורים</a></label>
                    </div>
                </div>


            </div>


      



        </body>



       
   
        </Router>
  )
    }
}

export default Main;
