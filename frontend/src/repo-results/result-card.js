import React from 'react';
import Box from '@material-ui/core/Box';
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
        {/* <Box marginBottom="1rem"> */}
          <Typography variant="body1" paragraph>
            {props.repo.description}
          </Typography>
        {/* </Box> */}
        <RepoCardMetadata repo={props.repo} />
      </Grid>
      <Grid item xs={1} style={{textAlign: 'right'}}>
        <LanguageIcon language={props.repo.language} />
      </Grid>
    </Grid>
  </CardContent>
);

const RepoCardMetadata = props => {
  const metadataItems = [];
  if (props.repo.created_at) metadataItems.push({
    label: 'Created',
    value: new Date(props.repo.created_at).toDateString()
  });
  if (props.repo.updated_at) metadataItems.push({
    label: 'Updated',
    value: new Date(props.repo.updated_at).toDateString()
  });
  if (props.repo.license) metadataItems.push({
    label: 'License',
    value: props.repo.license.name
  });

  const metadataMarkup = metadataItems.map(item => {
    return (
      <Grid container
            key={item.label}
      >
        <Grid item xs={4}>
          <Typography variant="body2" >
            <strong>{item.label}</strong>
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body2" >
            {item.value}
          </Typography>
        </Grid>
      </Grid>
    );
  });

  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        {metadataMarkup}
      </Grid>
    </Grid>
  );
};

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
