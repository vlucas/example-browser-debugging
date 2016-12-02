import React from 'react';

const MAGIC_NUMBER = 2;

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      MAGIC_NUMBER: '...'
    };
  }

  triggerError() {
    let foo = 'bar';

    throw new Error('This is an error that I just triggered! ' + foo);
  }

  getMagicNumber() {
    try {
      return 2;
    }
    finally {
      return 3;
    }
  }

  showMagicNumber() {
    this.setState({
      MAGIC_NUMBER: this.getMagicNumber()
    });
  }

  render() {
    return (
      <div>
        <h2>Homepage</h2>
        <p><a className="button button-warn" onClick={() => this.triggerError()}>Trigger Error</a></p>
        <p>&nbsp;</p>
        <p><a className="button" onClick={() => this.showMagicNumber()}>Show Magic Number ({MAGIC_NUMBER})</a> ({this.state.MAGIC_NUMBER})</p>
        <p>&nbsp;</p>
        <p>Something here</p>
      </div>
    );
  }
}
