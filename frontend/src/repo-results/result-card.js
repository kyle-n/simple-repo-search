import React from 'react';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const ResultCard = props => (
  <Grow in>
    <Card>
      <CardHeader title={props.repo.name}
                  subheader={props.repo.owner.login || null}
                  avatar={props.repo.owner.avatar_url ? (
                    <Avatar src={props.repo.owner.avatar_url} />
                  ) : null}
      />
      <CardContent>
        <Typography variant="body2">
          {props.repo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container>
        </Grid>
      </CardActions>
    </Card>
  </Grow>
);

export default ResultCard;
