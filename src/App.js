import React,{Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
      username: "Test User1"
  }
  
  changedStateHandler = (event) => {
    this.setState ({
        username:event.target.value
    });
  }

  render(){return (
    <div className="App">
      <UserInput username={this.state.username} changed = {this.changedStateHandler}/>
      <UserOutput username={this.state.username}/>
    </div>
  )};
}

export default App;
