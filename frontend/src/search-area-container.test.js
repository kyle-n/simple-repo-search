import React from 'react';
import ReactDOM from 'react-dom';
import SearchAreaContainer from './search-area-container';

describe('search area container', () => {

  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

});
