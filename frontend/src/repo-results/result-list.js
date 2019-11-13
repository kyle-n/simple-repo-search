import React from 'react'
import Grid from '@material-ui/core/Grid';
import ResultCard from './result-card';
import Box from '@material-ui/core/Box';

const ResultList = props => (
  <Grid container>
    {props.results ? props.results.map(result => {
      return (
        <Grid item
              key={result.id}
              xs={12} md={6} lg={4} xl={3}
        >
          <Box margin="1rem">
            <ResultCard repo={result} />
          </Box>
        </Grid>
      );
    }) : null}
  </Grid>
);

export default ResultList;
