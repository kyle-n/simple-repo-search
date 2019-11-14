import {assert} from 'chai';
import {describe, it} from 'mocha';
import {stub} from 'sinon';
import {githubConnector} from '../external-connectors';
import axios from 'axios';

describe('the github external connector', () => {
  const baseUrl = 'https://api.github.com/search/repositories?';

  it('should forward a search query', () => {
    // arrange
    const mockParamString = 'q=tetris+language:assembly&sort=stars&order=desc';
    const searchStub = stub(axios, 'get').returns(new Promise(resolve => resolve(null)));

    // act
    githubConnector.searchRepos(mockParamString);

    // assert
    assert(searchStub.calledOnceWith(baseUrl + mockParamString));

    // teardown
    searchStub.restore();
  });

});
