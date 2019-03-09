import React, {Component} from 'react';
import './App.css';
import Clock from './Clock.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2019',
      newDeadline: ''
    }
  }

  changeDeadline = () => {
    this.setState({
      deadline: this.state.newDeadline
    })
  };


  render() {
    return (
      <div className="App">
        <div>Countdown to {this.state.deadline}</div>

        <div>
          <Clock
            deadline={this.state.deadline}
          />
          <input
            onChange={(event) => this.setState({ newDeadline: event.target.value})}
            placeholder="new date"/>
          <button
            onClick={this.changeDeadline}
          >Submit
          </button>
        </div>
      </div>
    );
  }
}

export default App;
