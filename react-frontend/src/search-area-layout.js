import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {SearchInput} from './search-input'
import {ResultList} from './repo-results';
import {Alert} from './assorted';

const SearchAreaLayout = props => (
  <Box minHeight="10rem">
    <Grid container justify="center">
      <Grid item xs={12} md={6}>
        <SearchInput setQuery={props.setQuery}
                     isLoading={props.isLoading}
                     setFilter={props.setFilter}
        />
      </Grid>
      <Grid item xs={12}>
        <Box marginY="1rem">
          <ResultList results={props.searchResults} />
        </Box>
      </Grid>
      {/* In a larger application, this component would be root-level and accept global state values */}
      <Alert message={props.alert.message}
             isError={props.alert.isError}
      />
    </Grid>
  </Box>
);

export default SearchAreaLayout;
