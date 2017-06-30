import React from 'react';
import $ from 'jquery';

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

























  handleAppendClickVanillaAsync() {
    let el = document.getElementById('append-here');
    let container = document.createElement('div');

    function updater (num) {
      return function () {
        let item = document.createElement('div');
        item.appendChild(document.createTextNode('My Item ' + num));

        container.appendChild(item);
      };
    }

    for (let i = 0; i < ITEMS_NUM; i++) {
      setTimeout(updater(i), 0);
    }

    setTimeout(function () {
      el.appendChild(container);
    }, 0);
  }

























  handleAppendClickVanillaAnimation() {
    let el = document.getElementById('append-here');
    let container = document.createElement('div');

    function updater (num) {
      return function () {
        let item = document.createElement('div');
        item.appendChild(document.createTextNode('My Item ' + (num)));

        container.appendChild(item);

        if (num < ITEMS_NUM) {
          requestAnimationFrame(updater(num + 1));
        }
      };
    }

    requestAnimationFrame(updater(0));
    el.appendChild(container);
  }


























  handleAppendClickLudicrousSpeed() {
    let el = document.getElementById('append-here');
    let container = document.createElement('div');

    function updater (num, numToUpdate) {
      return function () {
        let nextNum = num + numToUpdate;

        for (let i = 0; i < numToUpdate; i++) {
          let item = document.createElement('div');
          item.appendChild(document.createTextNode('My Item ' + (num + i)));

          container.appendChild(item);
        }

        if (nextNum < ITEMS_NUM) {
          requestAnimationFrame(updater(nextNum, numToUpdate));
        }
      };
    }

    requestAnimationFrame(updater(0, 50));
    el.appendChild(container);
  }

  // end
























  handleAppendClickPlaidSpeed() {
    let plaid = $('<div id="plaid"></div>')
      .click(function () { $(this).remove(); });

    plaid.appendTo(document.body);
  }





















  clearItems() {
    let el = $('#append-here');

    el.html('');
  }




















  render() {
    return (
      <div>
        <h2>Append Loop (DOM Mutation)</h2>
        <p><a className="button button-warn" onClick={() => this.clearItems()}>Clear Items</a></p>
        <p>
          <a className="button" onClick={() => this.handleAppendClickjQuery()}>Append (jQuery)</a>
          <a className="button" onClick={() => this.handleAppendClickVanilla()}>Append (Vanilla.js)</a>
          <a className="button" onClick={() => this.handleAppendClickVanillaAsync()}>Append (Vanilla.js) Async</a>
          <a className="button" onClick={() => this.handleAppendClickVanillaAnimation()}>Append requestAnimationFrame()</a>
          <a className="button" onClick={() => this.handleAppendClickLudicrousSpeed()}>Append (Vanilla.js) Faster?</a>
          <a className="button" onClick={() => this.handleAppendClickPlaidSpeed()}>Append (Vanilla.js) Even FASTER?</a>
        </p>
        <div id="append-here">Items go here...</div>
      </div>
    );
  }
}
