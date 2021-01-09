
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import react, {Component} from 'react';
import axios from 'axios';

class Siblings extends Component {

  
  state = {
    stories: [],
  };

  componentDidMount(){
    axios.get('https://localhost:3001/test').then(res =>{
      this.setState({stories: res.data});
    });
  }
    render(){
  return (
    <Router>
        <h1 class="text-center">siblings</h1>
        <ul>
          {
            this.state.stories.map(story => <li>{story.name}</li>)
          }
       </ul>
        </Router>
  )
    }
}

export default Siblings;
