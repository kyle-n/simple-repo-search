import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const SortFilter = props => {
  const selectId = 'sort-by-filter';
  return (
    <FormControl>
      <InputLabel htmlFor={selectId}>
        Sort by
      </InputLabel>
      <Select id={selectId}
              onChange={props.handleChange}
      >
        <SortOptions />
      </Select>
    </FormControl>
  );
};

const SortOptions = () => {
  const options = [
    {label: 'Relevance', value: 'score'},
    {label: 'Stars', value: 'stars'},
    {label: 'Updated at', value: 'updated'}
  ];
  return options.map(option => {
    return (
      <MenuItem value={option.value}
                key={option.value}
      >
        {option.label}
      </MenuItem>
    );
  });
};

export default SortFilter;
