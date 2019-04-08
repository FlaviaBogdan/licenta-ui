import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function PersonalInfo() {
  return (
    <React.Fragment>
      <Typography variant="subtitle1" gutterBottom>
        Informatii Personale
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Prenume"
            fullWidth
            autoComplete="Prenume"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="LastName"
            name="LastName"
            label="Nume de familie"
            fullWidth
            autoComplete="Nume de familie"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Email"
            name="Email"
            label="Adresa de e-mail"
            fullWidth
            autoComplete="billing Email"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="Email"
            name="Email"
            label="Nume de utilizator"
            fullWidth
            autoComplete="billing username"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Password"
            name="Password"
            label="Parola"
            fullWidth
            autoComplete="billing Password"
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
            id="Re-Password"
            name="Re-Password"
            label="Introdu din nou parola"
            fullWidth
            autoComplete="billing Password2"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="Terms" value="yes" />}
            label="Accept termenii de utilizare si Politica Privata"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PersonalInfo;