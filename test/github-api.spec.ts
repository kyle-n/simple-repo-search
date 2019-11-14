import {assert} from 'chai';
import {describe, it} from 'mocha';
import {stub} from 'sinon';
import {searchRepos} from '../api/github';
import {githubConnector} from '../external-connectors';

describe('the api on this server for interacting with github', () => {
  const mockParamString = 'q=tetris+language:assembly&sort=stars&order=desc';
  const mockRequest = {_parsedUrl: {query: mockParamString}};

  it('should forward the query string to the github connector', () => {
    const connectorStub = stub(githubConnector, 'searchRepos');

    try {
      searchRepos(mockRequest, null);
    } catch (e) {
      assert(connectorStub.calledOnceWith(mockParamString));
    }

    connectorStub.restore();
  });

  it('should return an error if the github request errors', () => {
    const error = 'failed request';
    const connectorStub = stub(githubConnector, 'searchRepos').throwsException(error);
    const sendStub = stub();

    try {
      searchRepos(mockRequest, {send: sendStub});
    } catch (e) {
      assert(sendStub.calledOnceWith(error))
    }

    connectorStub.restore();
  });

});