import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onClick}>Count Up!!</button>
      </div>
    );
  }
}

export default App;