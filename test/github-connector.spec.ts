import {assert} from 'chai';
import {describe, it} from 'mocha';
import {spy, stub} from 'sinon';
import {githubConnector} from '../external-connectors';
import axios from 'axios';

describe('the github external connector', () => {
  const baseUrl = 'https://api.github.com/search/repositories?';

  it('should forward a search query', () => {
    // arrange
    const mockParamString = 'q=tetris+language:assembly&sort=stars&order=desc';
    const searchStub = stub(axios, 'get').returns(new Promise(resolve => resolve(null)));
    const searchSpy = spy(axios, 'get');

    // act
    githubConnector.searchRepos(mockParamString);

    // assert
    assert(searchSpy.calledOnceWith(baseUrl + mockParamString));

    // teardown
    searchSpy.restore();
    searchStub.restore();
  });

});
