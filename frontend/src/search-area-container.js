import React from 'react';
import SearchAreaLayout from './search-area-layout';
import {searchGitHubRepos} from './api';

export default class SearchAreaContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      isLoading: false,
      alert: {isError: false, message: null}
    };

  }

  searchRepos = query => {
    if (!query) return;

    this.setState({isLoading: true}, async () => {
      const resp = await searchGitHubRepos(query);

      if (resp.error) return this.setState({
        isLoading: false,
        alert: {isError: true, message: `Error ${resp.error}`}
      });

      this.setState({
        searchResults: resp.data.items,
        isLoading: false,
        alert: {isError: false, message: 'Loaded repositories'}
      });
    });
  };

  render() {
    return (
      <SearchAreaLayout setQuery={this.searchRepos}
                        isLoading={this.state.isLoading}
                        searchResults={this.state.searchResults}
                        alert={this.state.alert}
      />
    );
  }
}
