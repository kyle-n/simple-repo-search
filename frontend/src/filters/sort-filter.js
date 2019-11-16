import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

class SortFilter extends React.Component {
  constructor(props) {
    super(props);

    this.options = [
      {label: 'Relevance', value: 'score'},
      {label: 'Stars', value: 'stars'},
      {label: 'Updated at', value: 'updated'}
    ];

    this.state = {
      selected: 'score'
    };
  }

  handleChange = selected => {
    this.setState({selected}, () => this.props.setFilter(selected));
  }

  render() {
    const selectId = 'sort-by-filter';
    const optionMarkup = this.options.map(option => {
      return (
        <MenuItem value={option.value}
                  key={option.value}
        >
          {option.label}
        </MenuItem>
      );
    });

    return (
      <FormControl fullWidth>
        <InputLabel htmlFor={selectId}>
          Sort by
        </InputLabel>
        <Select id={selectId}
                value={this.state.selected}
                onChange={e => this.handleChange(e.target.value)}
        >
          {optionMarkup}
        </Select>
      </FormControl>
    );
  }
};

export default SortFilter;
