import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const RepoCardContent = props => (
  <CardContent>
    <Grid container>
      <Grid item xs={10}>
        <Typography variant="body1" paragraph>
          {props.repo.description}
        </Typography>
        <RepoCardMetadata repo={props.repo} />
      </Grid>
      <Grid item xs={2}
            style={{textAlign: 'right'}}
      >
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

  return metadataItems.map(item => {
    return (
      <Typography key={item.label}
                  variant="body2">
        <strong>{item.label}</strong> {item.value}
      </Typography>
    );
  });
};

const LanguageIcon = props => {
  return props.language ? (
    <i className={`devicon-${props.language.toLowerCase()}-plain`}
       style={{fontSize: '3rem', opacity: 0.3}}
       title={props.language}
    ></i>
  ) : null;
};

export default RepoCardContent;
