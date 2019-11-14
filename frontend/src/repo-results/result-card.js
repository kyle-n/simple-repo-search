import React from 'react';
import Grow from '@material-ui/core/Grow';
import Card from '@material-ui/core/Card';
import RepoCardHeader from './repo-card-header';
import RepoCardContent from './repo-card-content';
import RepoCardActions from './repo-card-actions';

const ResultCard = props => (
  <Grow in>
    <Card>
      <RepoCardHeader repo={props.repo} />
      <RepoCardContent repo={props.repo} />
      <RepoCardActions url={props.repo.html_url} />
    </Card>
  </Grow>
);

export default ResultCard;
