import React from 'react';
import SearchAreaLayout from './search-area-layout';
import {searchGitHubRepos} from './api';

export default class SearchAreaContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      query: null,
    };

  }

  searchRepos = query => {
    this.setState({query}, async () => {
      const resp = await searchGitHubRepos(query);
      // if (!resp) return this.props.sendAlert('Could not load repositories');
      if (resp.error) return console.log(resp.error);
      this.setState({searchResults: resp.data.items, query: null});
    });
  };

  render() {
    return (
      <SearchAreaLayout setQuery={this.searchRepos}
                        isLoading={!!(this.state.query)}
                        searchResults={this.state.searchResults}
      />
    );
  }
}
