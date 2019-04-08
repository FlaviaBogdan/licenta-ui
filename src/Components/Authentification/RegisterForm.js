import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonalInfo from './PersonalInfo';
import Grid from '@material-ui/core/Grid';

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


class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <div className={classes.paper}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={12}>
                <Typography component="h1" variant="h4" align="center">
                  Inregistrare
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography variant="subtitle1" gutterBottom style={{ textAlign: "center" }}>
                  Creaza-ti un cont. Este gratis si dureaza doar cateva minute.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>  <PersonalInfo /></Grid>
              <Grid container spacing={24} direction="row">
                <Grid item xs />
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ width: '100%', marginLeft: 0 }}>
                    Inregistreaza-te
                </Button>
                </Grid>
                <Grid item xs />
              </Grid>
            </Grid>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register)