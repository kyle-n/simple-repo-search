import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import 'devicon/devicon.min.css'

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

// special cases for icon names
const ghLangToIconName = ghLang => {
  const lcName = ghLang.toLowerCase();
  switch (lcName) {
    case 'c++':
      return 'cplusplus';
    case 'css':
      return 'css3';
    case 'c#':
      return 'csharp';
    case 'html':
      return 'html5';
    case 'shell':
      return 'linux';
    case 'vue':
      return 'vuejs';
    // generic icon'
    case 'assembly':
    case 'dart':
    case 'elixir':
    case 'lua':
      return 'devicon';
    default:
      return lcName;
  }
};

const LanguageIcon = props => {
  return props.language ? (
    <div>
      <div>
        <i className={`devicon-${ghLangToIconName(props.language)}-plain`}
           style={{fontSize: '3rem', opacity: 0.3}}
           title={props.language}
        ></i>
      </div>
      <div>
        {props.language}
      </div>
    </div>
  ) : null;
};

export default RepoCardContent;
