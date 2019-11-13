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
import StarIcon from '@material-ui/icons/Star';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import './overrides.css';

const ResultCard = props => (
  <Grow in>
    <Card>
      <RepoCardHeader repo={props.repo} />
      <RepoCardContent repo={props.repo} />
      <RepoCardActions repo={props.repo} />
    </Card>
  </Grow>
);

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

const RepoCardContent = props => (
  <CardContent>
    <Grid container>
      <Grid item xs={11}>
        <Typography variant="body2">
          {props.repo.description}
        </Typography>
      </Grid>
      <Grid item xs={1} style={{textAlign: 'right'}}>
        <LanguageIcon language={props.repo.language} />
      </Grid>
    </Grid>
  </CardContent>
);

const RepoCardActions = props => (
  <CardActions>
    <Grid container>
    </Grid>
  </CardActions>
);

const LanguageIcon = props => {
  return props.language ? (
    <i className={`devicon-${props.language.toLowerCase()}-plain`}
       style={{fontSize: '3rem', opacity: 0.3}}
       title={props.language}
    ></i>
  ) : null;
};

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

export default ResultCard;
