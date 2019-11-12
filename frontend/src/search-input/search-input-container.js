import React from 'react';
// import SearchInput from './search-input';
import qs from 'qs';

export default class SearchInputContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      query: null,
    };
    const queryParams = qs.parse(this.props.location.search, {ignoreQueryPrefix: true});
    if (queryParams.q) this.state.query = queryParams.q;
  }

  componentDidMount() {
    if (this.state.query) this.searchRepos(this.state.query);
  }

  searchRepos = query => {
    this.setState({query}, async () => {
      const resp = await searchRepos(query);
      // if (!resp) return this.props.sendAlert('Could not load games');
      this.setState({searchResults: resp.items, query: null});
    });
  };

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

const RedirectToQueryPage = props => {
  return props.query ? (<Redirect to={'/search?q=' + props.query} />) : null;
};
