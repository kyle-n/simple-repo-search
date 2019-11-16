import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import ReactDOM from 'react-dom';
import SortFilter from './sort-filter';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('sort filter component', () => {

  let container = null;
  let wrapper = null;
  let mockSetFilter = jest.fn();

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    wrapper = shallow(<SortFilter setFilter={mockSetFilter} />);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
    wrapper = null;
  });

  it('should initialize with score preselected', () => {
    expect(wrapper.state('sort')).toBe('score');
    expect(wrapper.state('order')).toBe('desc');
  });

  it('should not allow score asc', () => {
    const instance = wrapper.instance();

    instance.changeSort('score');

    expect(wrapper.state('order')).toBe('desc');
  });

});
