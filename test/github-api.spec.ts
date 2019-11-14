import {assert} from 'chai';
import {describe, it} from 'mocha';
import {stub} from 'sinon';
import {searchRepos} from '../api/github';
import {githubConnector} from '../external-connectors';

describe('the api on this server for interacting with github', () => {

  it('should forward the query string to the github connector', () => {
    const mockParamString = 'q=tetris+language:assembly&sort=stars&order=desc';
    const connectorStub = stub(githubConnector, 'searchRepos');
    const mockRequest = {_parsedUrl: {query: mockParamString}};
    const stubResponse = stub();

    searchRepos(mockRequest, stubResponse);
    assert(connectorStub.calledOnceWith(mockParamString));

    connectorStub.restore();
  });

});