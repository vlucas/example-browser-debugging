import React from 'react';
import $ from 'jquery';
import Timer from './Timer';

const ITEMS_NUM = 1000;

export default class AppendLoop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  handleAppendClickjQuery() {
    let el = $('#append-here');

    for (var i = 0; i < ITEMS_NUM; i++) {
      let item = $('<div>My Item ' + i + '</div>');

      el.append(item);
    }
  }







  handleAppendClickVanilla() {
    let el = document.getElementById('append-here');
		let container = document.createElement('div');

    for (var i = 0; i < ITEMS_NUM; i++) {
      let item = document.createElement('div');
      item.appendChild(document.createTextNode('My Item ' + i));

      container.appendChild(item);
    }

		el.appendChild(container);
  }






  clearItems() {
    let el = $('#append-here');

    el.html('');

    if (this.state.items) {
      this.setState({ items: null });
    }
  }



  render() {
    return (
      <div>
        <h2>Append Loop (DOM Mutation)</h2>
        <p><a className="button button-warn" onClick={() => this.clearItems()}>Clear Items</a></p>
        <p>
          <a className="button" onClick={() => this.handleAppendClickjQuery()}>Append (jQuery)</a> &nbsp;
          <a className="button" onClick={() => this.handleAppendClickVanilla()}>Append (Vanilla.js)</a>
        </p>
        <Timer />
        <div id="append-here">Items go here...</div>
      </div>
    );
  }
}

