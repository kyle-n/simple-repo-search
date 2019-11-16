import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {githubOrderOptions, githubSortOptions} from '../api';

class SortFilter extends React.Component {
  constructor(props) {
    super(props);

    this.options = githubSortOptions.map(option => {
      return {label: option, value: option}
    });
    this.orders = githubOrderOptions.slice();

    this.state = {
      sort: 'score',
      order: 'desc'
    };
  }

  componentDidMount() {
    this.props.setFilter(this.state);
  }

  changeSort = sort => {
    this.setState({sort}, () => this.props.setFilter(this.state));
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
                           selected={this.state.sort}
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