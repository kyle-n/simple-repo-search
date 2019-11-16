import React from 'react';
import SearchAreaLayout from './search-area-layout';
import {searchGitHubRepos} from './api';

/**
 * This class contains the bulk of the state and logic throughout the entire application.
 */
export default class SearchAreaContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      isLoading: false,
      query: '',
      alert: {isError: false, message: null},
      filters: {sort: null, order: null}
    };
  }

  // Uses params instead of state to be more "pure" and testable
  searchRepos = (query, filters) => {
    if (!query) return;

    this.setState({isLoading: true, query}, async () => {
      const resp = await searchGitHubRepos(query, filters);

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

  setFilter = filters => {
    this.setState({filters}, () => this.searchRepos(this.state.query, this.state.filters));
  };

  setQuery = query => {
    this.setState({query}, () => this.searchRepos(this.state.query, this.state.filters));
  };

  render() {
    return (
      <SearchAreaLayout setQuery={this.setQuery}
                        isLoading={this.state.isLoading}
                        searchResults={this.state.searchResults}
                        alert={this.state.alert}
                        setFilter={this.setFilter}
      />
    );
  }
}
