import React from 'react';
import EventEmitter from 'events';

const events = new EventEmitter();
events.setMaxListeners(99);

export default class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listener_count: 0
    };
  }

  componentDidMount() {
    events.on('event1', this.handleEvent1);
  }

  triggerEvent1() {
    events.emit('event1');
  }

  handleEvent1() {
    alert('Event ONE');
  }

  attachEventListener() {
    events.on('event-attach', (e) => {
      console.log('Attatched on event listener');
    });

    this.setState({
      listener_count: events.listenerCount('event-attach')
    });
  }

  triggerEventListeners() {
    events.emit('event-attach');
  }

  render() {
    return (
      <div>
        <h2>Events</h2>

        <p>
          <a className="button button-approve" onClick={() => this.attachEventListener()}>Attach Event Listener</a> &nbsp;
          <a className="button button-neutral" onClick={() => this.triggerEventListeners()}>Trigger Event ({this.state.listener_count} listeners)</a>
        </p>
        <p>&nbsp;</p>
        <p><a className="button button-neutral" onClick={() => this.triggerEvent1()}>Event Two</a></p>
      </div>
    );
  }
}
