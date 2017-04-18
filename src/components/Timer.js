import React from 'react';

let timer;

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 1
    };

    this.updateTimer = this.updateTimer.bind(this);
  }

  componentDidMount() {
    timer = setInterval(this.updateTimer, 200);
  }

  componentWillUnmount() {
    clearInterval(timer);
  }

  updateTimer() {
    this.setState({ time: this.state.time + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.time}</p>
      </div>
    );
  }
}

