import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';
import {expect} from 'chai';
import SearchAreaContainer from './search-area-container';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

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

  it('should initialize with the correct default state', () => {
    const wrapper = shallow(<SearchAreaContainer />);

    expect(wrapper.state('searchResults')).to.be.an('array').of.length(0);
    expect(wrapper.state('isLoading')).to.equal(false);
    expect(wrapper.state('alert')).to.be.an('object');
    expect(wrapper.state('alert').isError).to.equal(false);
    expect(wrapper.state('alert').message).to.equal(null);
  });

});
