import React from 'react';
import AppendLoop from './AppendLoop';
import Blocking from './Blocking';
import Home from './Home';
import Events from './Events';
import Inbox from './Inbox';
import Timer from './Timer';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    let selectedComponent = localStorage.getItem('selectedComponent');

    this.state = {
      selectedComponent: selectedComponent || 'home'
    };
  }

  getComponent(component) {
    let options = {
      'append': () => <AppendLoop />,
      'blocking': () => <Blocking />,
      'home': () => <Home />,
      'events': () => <Events />,
      'inbox': () => <Inbox />,
    };

    if (typeof options[component] === 'undefined') {
      throw new Error('Specified component not available');
    }

    return options[component]();
  }

  switchContent(selectedComponent) {
    this.getComponent(selectedComponent);
    this.setState({ selectedComponent });
    localStorage.setItem('selectedComponent', selectedComponent);
  }

  renderContent() {
    return this.getComponent(this.state.selectedComponent);
  }

  render() {
    return (
      <div>
        <h1>ACME, Inc. Widgets (<Timer />)</h1>

        <div className="grid-flex-container">
          <div className="grid-flex-cell grid-flex-cell-1of4">
            <nav role="navigation">
              <ul className="list-unstyled side-nav">
                <li><a onClick={() => this.switchContent('home')}>Home</a></li>
                <li><a onClick={() => this.switchContent('append')}>Append Loop</a></li>
                <li><a onClick={() => this.switchContent('blocking')}>Blocking</a></li>
                <li><a onClick={() => this.switchContent('events')}>Events</a></li>
                <li><a onClick={() => this.switchContent('inbox')}>Inbox</a></li>
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
