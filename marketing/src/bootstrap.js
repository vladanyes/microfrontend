import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function mount(el) {
  if (el) {
    ReactDOM.render(
      <App />,
      el,
    );
    console.warn('MarketingApp has been mounted!');
  }
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#marketing-root-id');
  mount(el);
}

export { mount };
