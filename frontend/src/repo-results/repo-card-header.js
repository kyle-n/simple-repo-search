import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import './overrides.css';

const RepoCardHeader = props => (
  <CardHeader title={props.repo.name}
              subheader={props.repo.owner.login || null}
              avatar={props.repo.owner.avatar_url ? (
                <Avatar src={props.repo.owner.avatar_url} />
              ) : null}
              action={(
                <ScoreAndStars score={props.repo.score}
                                stars={props.repo.stargazers_count}
                />
              )}
  />
);

const ScoreAndStars = props => (
  <Grid container justify="space-between">
    <Grid item xs={5}>
      <ScoreIconAndNumber score={props.score} />
    </Grid>
    <Grid item xs={6}>
      <StarIconAndNumber stars={props.stars} />
    </Grid>
  </Grid>
);

const ScoreIconAndNumber = props => (
  <span>
    <TrendingUpIcon />
    <Typography variant="body1">
      {Math.floor(props.score)}
    </Typography>
  </span>
);

const StarIconAndNumber = props => (
  <span>
    <StarIcon />
    <Typography variant="body1">
      {props.stars}
    </Typography>
  </span>
);

export default RepoCardHeader;
