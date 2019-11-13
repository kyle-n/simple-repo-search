import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const SearchInputBox = props => {
  return (
    <Grid container>
      <SearchIconBlock />
      <Grid item xs={11}>
        <SearchFormControl setQuery={props.setQuery}
                           isLoading={props.isLoading} />
      </Grid>
    </Grid>
  );
};

const SearchFormControl = props => {
  const inputId = 'repo-search-input';
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={inputId}>
        Search
      </InputLabel>
      <Input id={inputId}
              type="text"
              name="Repository search input"
              autoFocus
              onChange={props.setQuery}
              endAdornment={(<Spinner isLoading={props.isLoading} />)}
      />
    </FormControl>
  );
};

const SearchIconBlock = () => (
  <Grid item
        xs={1}
        style={{textAlign: 'center', margin: 'auto 0 0 0'}}
  >
    <SearchIcon />
  </Grid>
);

const Spinner = props => {
  return props.isLoading ? (
    <CircularProgress size={'1.25rem'}
                      style={{marginBottom: '0.5rem', marginRight: '0.5rem'}}
                      color="secondary"
    />
  ) : null;
};

export default SearchInputBox;
