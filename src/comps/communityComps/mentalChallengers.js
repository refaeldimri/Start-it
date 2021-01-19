
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import react, {Component} from 'react';
import axios from 'axios';


class MentalChallengers extends Component {

  state = {
    stories: [],
  };

  componentDidMount(){
    axios.post('http://localhost:3001/postRoutes/getPosts', {category: 'survivors'}).then((response)=>{
      //alert(JSON.stringify(response.data))
      this.setState({stories: response.data});
    }, (err)=>{alert(err)})
  }
    render(){
  return (
    <Router>

        <h1 class="text-center">mentalChallengers</h1>
        <ul>
          {
            this.state.stories.map(story => <li>{story.content} -- {story.nickname} -- {story.title}</li>)
          }
       </ul>
        </Router>
  )
    }
}

export default MentalChallengers;
