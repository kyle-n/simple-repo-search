import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const RepoCardActions = props => (
  <CardActions> 
    {/* Material UI's maintainers refuse to add 'offset' to Grid */}
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
