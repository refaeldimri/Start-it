
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import react, {Component} from 'react';
import axios from 'axios';

class KidsOfChallengers  extends Component {

  state = {
    stories: [],
  };

  componentDidMount(){
      axios.post('http://localhost:3001/test', {someString:"ignore this string"}).then((res) =>{
        alert(JSON.stringify(res.data))
        console.log(res.data)}
        ).catch((error) =>{console.log(error)})
    

    axios.get('https://jsonplaceholder.typicode.com/users').then(res =>{
      this.setState({stories: res.data});
    });
  }
    render(){
  return (
    <Router>
        <h1 class="text-center">KidsOfChallengers</h1>
        <ul>
          {
            this.state.stories.map(story => <li>{story.email}</li>)
          }
       </ul>
        </Router>
  )
    }
}

export default KidsOfChallengers;
