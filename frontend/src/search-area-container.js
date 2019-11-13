import React from 'react';
import SearchAreaLayout from './search-area-layout';

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
      // const resp = await searchRepos(query);
      // if (!resp) return this.props.sendAlert('Could not load repositories');
      // this.setState({searchResults: resp.items, query: null});
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
