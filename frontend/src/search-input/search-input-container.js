import React from 'react';
// import SearchInput from './search-input';
import qs from 'qs';

export default class SearchInputContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <RedirectToQueryPage query={this.state.query} /> */}
        {/* <SearchInput searchType="games"
                     setQuery={this.searchGames}
                     loading={!!(this.state.query)}
                     preset={this.state.query}
        />
        <GameResultsBox games={this.state.searchResults} /> */}
      </div>
    );
  }
}
