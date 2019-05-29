import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { withRouter } from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { login } from '../../utils/UserFunctions';
import withStyles from '@material-ui/core/styles/withStyles';



const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});


class LoginForm extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  changeField = (event) => {
    console.log(event.target.id);
    let userToLogin = { ...this.state };
    userToLogin[event.target.id] = event.target.value;
    this.setState({
      ...userToLogin
    })
  }

  onSubmit= (e) =>{
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    login(user).then(res => {
      if (res === 200) {
        this.props.history.push(`/`)
        this.props.onClose(true);
      } else if (res === 401) {
        alert("Wrong username or password");
      } else {
        alert("An error ocurred");
      }
    })

    e.preventDefault();
  }


  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Autentificare
        </Typography>
        <form className={classes.form} onSubmit={this.onSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" name="email" type="email" autoComplete="email" autoFocus onChange={this.changeField.bind(this)}/>
            </FormControl>
  
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Parola</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password" onChange={this.changeField.bind(this)}/>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Aminteste-ti user-ul si parola mea"
            />
            <Typography variant="subtitle1" gutterBottom >
              Daca inca nu ai un cont,
            <Button className={classes.button} style={{ textTransform: 'none', textAlign: "center" }} color="secondary" onClick={() => { this.props.registerCallback() }}>inregistreaza-te aici!</Button>
            </Typography>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Autentificare
          </Button>
          </form>
        </div>
      </main>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(LoginForm));