import React from 'react';
import SearchAreaLayout from './search-area-layout';
import {searchGitHubRepos} from './api';

export default class SearchAreaContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      query: null,
      alertMessage: null
    };

  }

  // componentDidMount() {
  //   setTimeout(() => this.setState({alertMessage: 'testing'}), 1000);
  // }

  searchRepos = query => {
    this.setState({query}, async () => {
      const resp = await searchGitHubRepos(query);
      if (resp.error) return this.setState({
        query: null,
        alertMessage: `Error: ${resp.error}`
      })
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
                        isLoading={!!(this.state.query)}
                        searchResults={this.state.searchResults}
                        alertMessage={this.state.alertMessage}
      />
    );
  }
}
