import React from 'react';
import Home from './Home';
import Events from './Events';
import Inbox from './Inbox';
import Timer from './Timer';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedComponent: 'home'
    };
  }

  getComponent(component) {
    let options = {
      'home': () => <Home />,
      'events': () => <Events />,
      'inbox': () => <Inbox />,
      'timer': () => <Timer />,
    };

    if (typeof options[component] === 'undefined') {
      throw new Error('Specified component not available');
    }

    return options[component]();
  }

  switchContent(selectedComponent) {
    this.getComponent(selectedComponent);
    this.setState({ selectedComponent });
  }

  renderContent() {
    return this.getComponent(this.state.selectedComponent);
  }

  render() {
    return (
      <div>
        <h1>ACME, Inc. Widgets</h1>

        <div className="grid-flex-container">
          <div className="grid-flex-cell grid-flex-cell-1of4">
            <nav role="navigation">
              <ul className="list-unstyled side-nav">
                <li><a onClick={() => this.switchContent('home')}>Home</a></li>
                <li><a onClick={() => this.switchContent('events')}>Events</a></li>
                <li><a onClick={() => this.switchContent('inbox')}>Inbox</a></li>
                <li><a onClick={() => this.switchContent('timer')}>Timer</a></li>
              </ul>
            </nav>
          </div>
          <div className="grid-flex-cell">
            <div id="content">
              {this.renderContent()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
