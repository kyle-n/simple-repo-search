import React from 'react';
import SearchAreaLayout from './search-area-layout';
import {searchGitHubRepos} from './api';

export default class SearchAreaContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      isLoading: false,
      alertMessage: null
    };

  }

  searchRepos = query => {
    this.setState({query}, async () => {
      const resp = await searchGitHubRepos(query);

      if (resp.error) return this.setState({
        isLoading: false,
        alertMessage: `Error: ${resp.error}`
      });

      this.setState({
        searchResults: resp.data.items,
        query: null,
        alertMessage: 'Loaded repositories'
      });
    });
  };

  render() {
    return (
      <SearchAreaLayout setQuery={this.searchRepos}
                        isLoading={this.state.isLoading}
                        searchResults={this.state.searchResults}
                        alertMessage={this.state.alertMessage}
      />
    );
  }
}
