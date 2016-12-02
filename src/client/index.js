'use strict';

import App from '../components/App';
import React from 'react';
import ReactDOM from 'react-dom';

const containerElement = document.getElementById('content');

function renderComponent(component) {
  ReactDOM.render(component, containerElement);
}

renderComponent(<App />);
