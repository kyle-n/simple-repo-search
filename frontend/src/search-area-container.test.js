import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';
import chai from 'chai';
import SearchAreaContainer from './search-area-container';
import Adapter from 'enzyme-adapter-react-16';
import { jssPreset } from '@material-ui/core';

Enzyme.configure({adapter: new Adapter()});

describe('search area container', () => {

  let container = null;
  let wrapper = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    wrapper = shallow(<SearchAreaContainer />);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
    wrapper = null;
  });

  it('should initialize with the correct default state', () => {
    chai.expect(wrapper.state('searchResults')).to.be.an('array').of.length(0);
    chai.expect(wrapper.state('isLoading')).to.equal(false);
    chai.expect(wrapper.state('alert')).to.be.an('object');
    chai.expect(wrapper.state('alert').isError).to.equal(false);
    chai.expect(wrapper.state('alert').message).to.equal(null);
  });

  it('should not search if given an empty string query', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'setState');

    instance.searchRepos('');

    expect(instance.setState).not.toHaveBeenCalled();
  });

});
