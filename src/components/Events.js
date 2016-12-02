import React from 'react';
import EventEmitter from 'events';

const events = new EventEmitter();

export default class Events extends React.Component {
  componentDidMount() {
    events.on('event1', this.handleEvent1);
  }

  triggerEvent1() {
    events.emit('event1');
  }

  handleEvent1() {
    alert('Event ONE');
  }

  attachEventListeners() {
    events.on('event-attach');
  }

  handleEvent1() {
    alert('Event ONE');
  }

  render() {
    return (
      <div>
        <h2>Events</h2>

        <p><a className='button' onClick={() => this.triggerEvent1()}>Event One</a></p>
        <p>&nbsp;</p>
        <p><a className='button button-approve' onClick={() => this.triggerEvent1()}>Event Two</a></p>
        <p>&nbsp;</p>
        <p><a className='button button-neutral' onClick={() => this.triggerEvent1()}>Event Two</a></p>
      </div>
    );
  }
}
