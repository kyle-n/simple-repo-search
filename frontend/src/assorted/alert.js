import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import {debounce} from 'throttle-debounce';

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
                message={(<span>{this.props.message}</span>)}
                open={this.state.open}
      />
    );
  }
}

export default Alert;
