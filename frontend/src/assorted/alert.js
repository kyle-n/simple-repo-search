import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Box from '@material-ui/core/Box';
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';
import {debounce} from 'throttle-debounce';

// has to maintain its own state, unfortunately, to know when to vanish
class Alert extends React.Component {
  constructor(props) {
    super(props);

    this.state = {open: false};
  }

  componentDidUpdate(prevProps) {
    if (this.props.message && prevProps.message !== this.props.message) {
      this.setState({open: true}, () => {
        this.debouncedCloseAlert();
      });
    }
  }

  debouncedCloseAlert = debounce(2 * 1000, () => this.setState({open: false}));

  render() {
    return (
      <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                autoHideDuration={1 * 1000}
                message={(
                  <AlertLayout message={this.props.message}
                               isError={this.props.isError}
                  />
                )}
                open={this.state.open}
      />
    );
  }
}

const AlertLayout = props => (
  <Box display="flex" alignItems="center">
    <AlertIcon isError={props.isError} />
    <Box marginLeft="0.5rem">
      {props.message}
    </Box>
  </Box>
);

const AlertIcon = props => {
  return props.isError ? (<ErrorIcon />) : (<CheckIcon />);
};

export default Alert;
