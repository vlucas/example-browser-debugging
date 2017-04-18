import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };

    this.addRandomMessageToInbox = this.addRandomMessageToInbox.bind(this);
  }

  fetchMessages() {
    let min = 500;
    let max = 3000;

    setTimeout(this.addRandomMessageToInbox, this.generateRandomNumber(min, max));
    setTimeout(this.addRandomMessageToInbox, this.generateRandomNumber(min, max));
    setTimeout(this.addRandomMessageToInbox, this.generateRandomNumber(min, max));
    setTimeout(this.addRandomMessageToInbox, this.generateRandomNumber(min, max));
    setTimeout(this.addRandomMessageToInbox, this.generateRandomNumber(min, max));
    setTimeout(this.addRandomMessageToInbox, this.generateRandomNumber(min, max));
    setTimeout(this.addRandomMessageToInbox, this.generateRandomNumber(min, max));
    setTimeout(this.addRandomMessageToInbox, this.generateRandomNumber(min, max));
    setTimeout(this.addRandomMessageToInbox, this.generateRandomNumber(min, max));
    setTimeout(this.addRandomMessageToInbox, this.generateRandomNumber(min, max));
  }

  addRandomMessageToInbox() {
    let message = this.generateRandomMessage();
    let messages = this.state.messages;

    messages.push(message);

    this.setState({ messages });
  }

  generateRandomMessage() {
    let words = [
      'amazing',
      'awesome',
      'cool',
      'fantastic',
      'great',
      'like none other'
    ];
    let randomNumber = this.generateRandomNumber(0, words.length-1);
    let randomWord = words[randomNumber];

    return 'Techlahoma is ' + randomWord;
  }

  generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.state.messages.map((message) => {
          return <p key={'message-' + this.generateRandomNumber(1, 2000)}>{message}</p>;
        })}
        <p>
          <a className="button button-approve" onClick={() => this.fetchMessages()}>Fetch Messages</a> &nbsp;
        </p>
      </div>
    );
  }
}
