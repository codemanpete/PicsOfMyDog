import React from 'react';
import Root from './components/root';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  const root = document.getElementById('root');
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser} };
    store = configureStore(preloadedState);
    window.store = store;
  } else {
    store = configureStore();

    window.store = store;
  }
  ReactDOM.render(<Root store={ store } />, root);
});
