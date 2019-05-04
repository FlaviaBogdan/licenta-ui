import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import RegisterForm from '../Authentification/RegisterForm';

class DialogRegister extends React.Component {
  state = {
    open: false,
  };
  constructor(props) {
    console.log('construcotr')
    super(props);
    this.state.open = this.props.open
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.callback(false)
  };

  render() {
    console.log('rendering dialog...', this.state);
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          maxWidth='md'
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <RegisterForm onClose={this.handleClose}/>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default DialogRegister;