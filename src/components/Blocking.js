import React from 'react';
import Timer from './Timer';

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
    sleep(5000);
  }

  render() {
    return (
      <div>
        <h2>Blocking JS</h2>

        <p><a className="button button-warn" onClick={() => this.doBlockingThing()}>Block for a while (sync load)</a></p>
        <Timer />
      </div>
    );
  }
}

