'use strict';

import Home from '../components/Home';
// import Events from '../components/Events';
// import Inbox from '../components/Inbox';
// import Timer from '../components/Timer';

function parseUrl( url ) {
  let a = document.createElement('a');
  a.href = url;
  return a;
}

function getComponent(component) {
  let options = {
    'home': () => Home,
    'events': () => Events,
    'inbox': () => Inbox,
    'timer': () => Timer,
  };

  if (typeof options[component] === 'undefined') {
    throw new Error('Specified component not available');
  }

  return options[component]();
}

function renderComponent(componentName) {
  let component = getComponent(componentName);

  console.log('> Component: ', componentName, component);

  $('#content').html(component.render());
}

function handleMenuClick(e) {
  let url = e.target.href;
  let componentName = parseUrl(url).hash.replace('#', '');

  renderComponent(componentName);
}


function init() {
  $('.side-nav a').click(handleMenuClick);
  renderComponent('home');
}

init();
