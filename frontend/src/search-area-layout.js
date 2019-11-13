import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {SearchInput} from './search-input'

const SearchAreaLayout = props => (
  <Grid container justify="center">
    <Grid item xs={12} md={6}>
      <SearchInput setQuery={props.setQuery}
                   isLoading={props.isLoading}
      />
    </Grid>
    <Grid item xs={12}>
      <Box marginY="1rem">
        <p>results</p>
      </Box>
    </Grid>
  </Grid>
);

export default SearchAreaLayout;
