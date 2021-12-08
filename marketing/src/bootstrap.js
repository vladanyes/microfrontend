import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function mount(el) {
  if (el) {
    ReactDOM.render(
      <App />,
      el,
    );
  }
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#marketing-root-id');
  console.warn('MOUNTED, el', el);
  mount(el);
}

export { mount };
