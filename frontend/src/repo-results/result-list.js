import React from 'react'
import Grid from '@material-ui/core/Grid';

const ResultList = props => (
  <Grid container>
    {props.results ? props.results.map(result => {
      return (
        <Grid item
              key={result.id}
              xs={12} md={6} lg={4} xl={3}
        >
          <p>{result.full_name}</p>
        </Grid>
      );
    }) : null}
  </Grid>
);

export default ResultList;
