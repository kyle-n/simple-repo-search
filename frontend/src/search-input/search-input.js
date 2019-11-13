import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

const SearchInputBox = props => {
  const inputId = 'repo-search-input';
  return (
    <Grid container>
      <Grid item xs={1}>
        <SearchIcon />
      </Grid>
      <Grid item xs={11}>
        <FormControl>
          <InputLabel htmlFor={inputId}>
            Search
          </InputLabel>
          <Input id={inputId}
                 type="text"
                 name="Repository search input"
                 autoFocus
                 onChange={props.setQuery}
                 endAdornment={(<Spinner loading={props.isLoading} />)}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

const Spinner = props => {
  return props.loading ? (
    <CircularProgress size={'1.25rem'}
                      style={{marginBottom: '0.5rem', marginRight: '0.5rem'}}
                      color="secondary"
    />
  ) : null;
};

export default SearchInputBox;
