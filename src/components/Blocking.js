import React from 'react';

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

export default class Blocking extends React.Component {
  doBlockingThing() {
  }

  render() {
    return (
      <div>
        <h2>Blocking JS</h2>

        <p><a className="button button-warn" onClick={() => this.doBlockingThing()}>Block for a while (sync load)</a></p>
      </div>
    );
  }
}
