import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import ReactDOM from 'react-dom';
import SearchAreaContainer from './search-area-container';
import Adapter from 'enzyme-adapter-react-16';
import * as ApiMethods from './api';

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
    expect(wrapper.state('searchResults').length).toBe(0)
    expect(wrapper.state('isLoading')).toBe(false);
    expect(wrapper.state('alert')).toEqual({isError: false, message: null});
  });

  it('should not search if given an empty string query', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'setState');

    instance.searchRepos('');

    expect(instance.setState).not.toHaveBeenCalled();
  });

  it('should send an error alert on request err', async () => {
    const mockResponse = {error: 'Could not complete request'};
    ApiMethods.searchGitHubRepos = jest.fn().mockReturnValue(mockResponse);
    const instance = wrapper.instance();

    await instance.searchRepos('will err');

    expect(wrapper.state('alert').isError).toBe(true);
  });

  it('should send a success alert on request', async () => {
    const mockResponse = {data: {items: []}};
    ApiMethods.searchGitHubRepos = jest.fn().mockReturnValue(mockResponse);
    const instance = wrapper.instance();

    await instance.searchRepos('will succeed');

    expect(wrapper.state('alert').isError).toBe(false);
  });

  it('should load search results into the state', async () => {
    const mockRepo = {name: 'Test repo'};
    const mockResponse = {data: {items: [mockRepo]}};
    ApiMethods.searchGitHubRepos = jest.fn().mockReturnValue(mockResponse);
    const instance = wrapper.instance();

    await instance.searchRepos('get repos');

    expect(wrapper.state('searchResults')[0]).toEqual(mockRepo);
  });

});
