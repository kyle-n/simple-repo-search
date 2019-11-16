import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

class SortFilter extends React.Component {
  constructor(props) {
    super(props);

    this.options = [
      {label: 'Relevance', value: 'score'},
      {label: 'Stars', value: 'stars'},
      {label: 'Updated at', value: 'updated'}
    ];
    this.orders = [
      'asc',
      'desc'
    ];

    this.state = {
      sort: 'score',
      order: 'desc'
    };
  }

  changeSort = selected => {
    this.setState({selected}, () => this.props.setFilter(this.state));
  }

  changeOrder = () => {
    const order = this.state.order === 'asc' ? 'desc' : 'asc';
    this.setState({order}, () => this.props.setFilter(this.state));
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={11}>
          <SortFormControl options={this.options}
                           onChange={this.changeSort}
                           selected={this.state.selected}
          />
        </Grid>
        <Grid item xs={1}>
          <OrderButton order={this.state.order}
                       onClick={this.changeOrder}
          />
        </Grid>
      </Grid>
    );
  }
};

const SortFormControl = props => {
  const selectId = 'sort-by-filter';
  const optionMarkup = props.options.map(option => {
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
              value={props.selected}
              onChange={e => props.onChange(e.target.value)}
      >
        {optionMarkup}
      </Select>
    </FormControl>
  );
}

const OrderButton = props => (
  <IconButton onClick={props.onClick}>
    {props.order === 'asc' ? (
      <ArrowUpwardIcon />
    ) : (
      <ArrowDownwardIcon />
    )}
  </IconButton>
);

export default SortFilter;
