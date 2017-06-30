import React from 'react';
import fetch from 'isomorphic-fetch';

export default class Inbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };

    this.fetchMessages = this.fetchMessages.bind(this);
  }

  fetchMessages(e) {
    e.preventDefault();

    fetch('/api/messages')
      .then((res) => res.json())
      .then((json) => {
        this.setState({ messages: json.messages });
      });
  }

  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.state.messages.map((message, index) => {
          return <p key={'message-' + index}>{message}</p>;
        })}
        <p>
          <a className="button button-approve" onClick={this.fetchMessages}>Fetch Messages</a> &nbsp;
        </p>
      </div>
    );
  }
}
