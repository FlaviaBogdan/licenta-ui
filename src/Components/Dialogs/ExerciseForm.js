import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 850,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
});


class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }


  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <main className={classes.main}>
          <CssBaseline />
          <div className={classes.paper}>
            <form className={classes.form} onSubmit={this.onSubmit}>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={12}>
                  <Typography component="h1" variant="h4" align="center">
                    Inregistreaza-te
                          </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography variant="subtitle1" gutterBottom style={{ textAlign: "center" }}>
                    Bun venit in mica marea noastra familie. Impreuna vom descoperii lucruri minunate!
                          </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <React.Fragment>
                    <Typography variant="subtitle1" gutterBottom>
                      Informatii personale
                              </Typography>

                 

                  </React.Fragment>
                </Grid>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  Inregistrare
    </Button>
              </Grid>
            </form>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(RegisterForm))