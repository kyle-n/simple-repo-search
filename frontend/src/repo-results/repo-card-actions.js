import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';

const RepoCardActions = props => (
  <CardActions> 
    <Grid container justify="flex-end" style={{textAlign: 'right'}}>
      <Grid item xs={2}>
        <Link href={props.url}
              target="_blank"
              variant="button"
        >
          Details
        </Link>
      </Grid>
    </Grid>
  </CardActions>
);

export default RepoCardActions;
