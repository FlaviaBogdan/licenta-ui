import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import jwt_decode from 'jwt-decode';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ReactDOM from 'react-dom';
import Select from '@material-ui/core/Select';
import Footer from './FoooterBlack'
import { profile } from '../../utils/UserFunctions';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    containerCentered: {
        margin: 'auto',
        width: '50%',
        border: '1px solid #ad1457',
    },

    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },

    mainFeaturedPostContent: {
        color: "#000",
        textAlign: 'center',

    },
    component: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    containerText: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: theme.spacing.unit * 3,
        alignItems: 'center',

    },

    textRight: {
        textAlign: "right",
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },

    submit: {
        margin: 'auto',
    },

    mainFeaturedPost: {
        backgroundColor: '#212121',
        color: theme.palette.common.white,

        margin: 'auto',
    },
});

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            labelWidth: 0,
            firstName: '',
            lastName: '',
            birthday: '',
            gender: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
        
    }

    onSubmit= (e) =>{
        const user = {
          email: this.state.email,
          password: this.state.password,
          gender: this.state.gender,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          birthday: this.state.birthday
        }
        console.log(user);
        profile(user).then(res => {
          if (res === 200) {
            this.props.history.push(`/`)
          } else {
            alert("An error ocurred");
          }
        })
    
        e.preventDefault();
      }

    changeField = (event) => {
        console.log(event.target.id);
        console.log('-------------------');
        console.log(event.target.value);
        let userDetails = { ...this.state };
        userDetails[event.target.id] = event.target.value;
        this.setState({
            ...userDetails
        })
        
    }

    

    componentDidMount() {
        const token = localStorage.usertoken;
        if (token) {
            try {
                const decoded = jwt_decode(token)
                console.log(">>>>>>>>>>>>>>>>>>>>",decoded);
                this.setState((prevState, props) =>
                    ({
                        firstName: decoded.firstName,
                        lastName: decoded.lastName,
                        email:decoded.email,
                        birthday:decoded.birthday,
                        gender:decoded.gender
                    }));
            } catch (err) {
                console.log(err);
                localStorage.removeItem('usertoken');
            }

        }
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }


    render() {
        const { selectedDate } = this.state;
        const { classes } = this.props;
        return (
            <div className={classes.root} style={{marginTop: '130px'}}>
                <div className={classes.root}>
                    <Grid container className={classes.containerCentered} spacing={40} direction="column" style={{marginBottom:'50px'}}>
                        <Grid item style={{ height: "100%", backgroundColor: ' #ad1457' }} >

                            <Grid container direction="column" spacing={40} style={{ height: 'inherit', width: 'inherit' }}>
                                <Grid item xs></Grid>
                                <Grid item xs>
                                    <div className={classes.mainFeaturedPostContent}>
                                        <img src={require('./edit.png')} className={classes.rightIcon} />
                                        <Typography variant="h6" style={{ color: 'white' }} gutterBottom>
                                            Edit your profile
                                                </Typography>


                                    </div>
                                </Grid>
                                <Grid item xs></Grid>
                            </Grid>

                        </Grid>
                        <Grid item style={{ height: '100%' }} >
                            <Grid container spacing={40} direction="column" >
                                <Grid item xs >

                                    <Grid container spacing={8} direction="row" className={classes.containerText}>
                                        <Grid item xs={2} className={classes.containerText}>
                                            <Typography variant="subtitle1" className={classes.textRight}>
                                                First Name
                                        </Typography>
                                        </Grid>
                                        <Grid item xs className={classes.textField}>
                                            <TextField
                                                id="firstName"
                                                value={this.state.firstName}
                                                label="First Name"
                                                onChange={this.changeField.bind(this)}
                                                fullWidth
                                                margin="normal"
                                                variant="outlined"
                                            />
                                        </Grid>
                                    </Grid>


                                    <Grid container spacing={8} direction="row" className={classes.containerText}>
                                        <Grid item xs={2} className={classes.containerText}>
                                            <Typography variant="subtitle1" className={classes.textRight}>
                                                Last Name
                                        </Typography>
                                        </Grid>
                                        <Grid item xs className={classes.textField}>
                                            <TextField
                                                id="lastName"
                                                label="Last Name"
                                                value={this.state.lastName}
                                                onChange={this.changeField}
                                                fullWidth
                                                margin="normal"
                                                variant="outlined"
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={8} direction="row" className={classes.containerText}>
                                        <Grid item xs={2} className={classes.containerText}>
                                            <Typography variant="subtitle1" className={classes.textRight} >
                                                Gender
                                        </Typography>
                                        </Grid>
                                        <Grid item xs className={classes.textField}>
                                            <FormControl variant="outlined" className={classes.formControl}>
                                                <InputLabel
                                                    ref={ref => {
                                                        this.InputLabelRef = ref;
                                                    }}
                                                    htmlFor="gender"
                                                >
                                                    Gender
                                                    </InputLabel>
                                                <Select
                                                
                                                    native
                                                    value={this.state.gender}
                                                    onChange={this.changeField}
                                                    input={
                                                        <OutlinedInput
                                                            name="gender"
                                                            labelWidth={this.state.labelWidth}
                                                            id="gender"
                                                        />
                                                    }
                                                >
                                                    <option value="" />
                                                    <option value={10}>Male</option>
                                                    <option value={20}>Female</option>
                                                    <option value={30}>Unspecified</option>
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                    </Grid>

                                    <Grid container spacing={8} direction="row" className={classes.containerText}>
                                        <Grid item xs={2} className={classes.containerText}>
                                            <Typography variant="subtitle1" className={classes.textRight}>
                                                Birthday
                                        </Typography>
                                        </Grid>
                                        <Grid item xs className={classes.textField}>
                                            <TextField
                                                id="birthday"
                                                value={this.state.birthday}
                                                type="date"
                                                defaultValue="2017-05-24"
                                                onChange={this.changeField}
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={8} direction="row" className={classes.containerText}>
                                        <Grid item xs={2} className={classes.containerText}>
                                            <Typography variant="subtitle1" className={classes.textRight}>
                                                Email
                                        </Typography>
                                        </Grid>
                                        <Grid item xs className={classes.textField}>
                                            <TextField
                                                id="email"
                                                label="Email"
                                                value={this.state.email}
                                                onChange={this.changeField}
                                                fullWidth
                                                margin="normal"
                                                variant="outlined"
                                            />
                                            <Typography variant="subtitle2" >
                                               The email address is private.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={8} direction="row" className={classes.containerText}>
                                        <Grid item xs={2} className={classes.containerText}>
                                            <Typography variant="subtitle1" className={classes.textRight}>
                                                Password
                                        </Typography>
                                        </Grid>
                                        <Grid item xs className={classes.textField}>
                                            <TextField
                                                id="password"
                                                label="Password"
                                                onChange={this.changeField}
                                                fullWidth
                                                type="password"
                                                margin="normal"
                                                variant="outlined"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={8} direction="row" className={classes.containerText}>
                                        <Grid item xs={2} className={classes.containerText}>
                                            <Typography variant="subtitle1" className={classes.textRight}>
                                                Confirm password
                                        </Typography>
                                        </Grid>
                                        <Grid item xs className={classes.textField}>
                                            <TextField
                                                id="confirmPassword"
                                                label="Confirm Password"
                                                onChange={this.changeField}
                                                fullWidth
                                                type="password"
                                                margin="normal"
                                                variant="outlined"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={this.onSubmit}
              className={classes.submit}
            >
              Save details
          </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <Footer/>
            </div>
        )
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile); 