import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

// import SearchAreaContainer from './search-area-container';
import {Footer, SiteTitle} from './assorted';

const RepoSearchPage = () => (
  <Grid container>
    <Grid item xs={12}>
      <SiteTitle />
    </Grid>
    <Grid item xs={12}>
      {/* <SearchAreaContainer /> */}
    </Grid>
    <Grid item xs={12}>
      <Footer />
    </Grid>
  </Grid>
);

export default RepoSearchPage;
