import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const SearchAreaLayout = props => (
  <Grid container justify="center">
    <Grid xs={12} md={6}>
      <input />
    </Grid>
    <Grid item xs={12}>
      <Box marginY="1rem">
        <p>results</p>
      </Box>
    </Grid>
  </Grid>
);

export default SearchAreaLayout;
