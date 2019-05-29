import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import jwt_decode from 'jwt-decode';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Typography } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import Image from './Images/NoPlans.jpg';
import CardHeader from '@material-ui/core/CardHeader';
import MenuItem from '@material-ui/core/MenuItem';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ReactDOM from 'react-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './FoooterBlack'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import { profile } from '../../utils/UserFunctions';
import FoooterBlack from './FoooterBlack';


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
    center: {
        margin: 'auto',
        width: '90%',

        padding: '10px',
    },
    center1: {
        margin: 'auto',
        width: '100%',

        padding: '5px',
    },

    card: {
        maxWidth: 1300,
        minHeight: 800,
    },

    cardMap: {
        maxWidth: 'auto',
        minHeight: 450,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: 'black',
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(0 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    }
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

    onSubmit = (e) => {
        const user = {
            email: this.state.email,
            password: this.state.password,
            title: this.state.title,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            birthday: this.state.birthday
        }
        console.log(user);
        if (this.state.password !== this.state.confirmPassword) {
            alert("Passwords do not match!");
        } else {
        profile(user).then(res => {
            if (res === 200) {
                this.props.history.push(`/`)
                alert("Successfully changed data");
            } else if (res === 400) {
                alert("Email already in use");
            }else {
                alert("An error ocurred");
            }
        })
    }

        e.preventDefault();
    } 

    changeField = (event) => {
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
                this.setState((prevState, props) =>
                    ({
                        firstName: decoded.firstName,
                        lastName: decoded.lastName,
                        email: decoded.email,
                        birthday: decoded.birthday,
                        title: decoded.title
                    }));
            } catch (err) {
                console.log(err);
                localStorage.removeItem('usertoken');
            }

        }
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleDateChange = date => {
        this.setState({ birthday: date });
    };


    render() {
        const { selectedDate } = this.state;
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <main className={classes.center1}>

                    <div className={classes.paper}>
                        <form className={classes.center}>
                            <Card className={classes.card}>
                                <CardContent style={{ padding: '50px' }}>
                                    <Grid container spacing={24} direction="row">
                                        <Grid item xs style={{alignItems:'center'}}>
                                        <Grid container spacing={40} style={{ height: 'inherit', width: 'inherit' }}>
                                            <Grid item xs={12} sm={12}> </Grid>
                                            <Grid item xs={12} sm={12}>
                                        <img src={require('./Images/e-learning01.png')} style={{ alignSelf: "center", width: 450, height: 650 }} />
                                        </Grid>
                                        <Grid item xs={12} sm={12}/>
                                        </Grid>
                                        </Grid>
                                        <Grid item xs>
                                        <Grid container spacing={24} >
                                            <Grid item xs={12}>
                                                <Typography component="h1" variant="h4" align="center">
                                                    Modifica profilul
                                             </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="subtitle1" gutterBottom style={{ textAlign: "center" }}>
                                                    Ai uitat parola? Sau vrei doar sa adaugi ziua de nastere? Aici poti sa iti modifici informatiile despre profilul tau!
                                             </Typography>
                                            </Grid>
                                            <Grid item xs={12}>

                                                <Typography variant="subtitle1" gutterBottom>
                                                    Informatii personale
                                                 </Typography>
                                            </Grid>
                                            <Grid container spacing={16}>
                                                <Grid item xs={12} sm={12}>

                                                    <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                        <InputLabel htmlFor="titlee">Titlu</InputLabel>
                                                        <Select
                                                            value={this.state.title}
                                                            onChange={this.handleChange('title')}
                                                            input={<Input id="title" />}
                                                        >
                                                            <MenuItem value={"Mr"}>Mr</MenuItem>
                                                            <MenuItem value={"Ms"}>Ms</MenuItem>
                                                            <MenuItem value={"Unspecified"}>Unspecified</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} sm={6}  >
                                                    <FormControl margin="normal" required fullWidth>
                                                        <InputLabel htmlFor="firstName">Prenume</InputLabel>
                                                        <Input value={this.state.firstName} id="firstName" name="firstName" autoFocus onChange={this.changeField} />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} sm={6}  >
                                                    <FormControl margin="normal" required fullWidth>
                                                        <InputLabel htmlFor="lastName">Nume</InputLabel>
                                                        <Input value={this.state.lastName} id="lastName" name="lastName" autoFocus onChange={this.changeField} />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <FormControl margin="normal" required fullWidth>

                                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>


                                                            <DatePicker
                                                                margin="normal"
                                                                label="Ziua nasterii"
                                                                value={this.state.birthday}
                                                                onChange={this.handleDateChange}
                                                            />
                                                        </MuiPickersUtilsProvider>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <FormControl margin="normal" required fullWidth>
                                                        <InputLabel htmlFor="email">Adresa de email</InputLabel>
                                                        <Input id="email" value={this.state.email} name="email" type="email" autoComplete="email" onChange={this.changeField} />
                                                    </FormControl>
                                                    <Typography variant="subtitle2" >
                                                        Adresa de e-mail este privata.
                                            </Typography>
                                                </Grid>

                                                <Grid item xs={12}>
                                                    <TextField
                                                        id="password"
                                                        label="Parola"
                                                        onChange={this.changeField}
                                                        fullWidth
                                                        type="password"
                                                        margin="normal"

                                                    />

                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        id="confirmPassword"
                                                        label="Confirma Parola"
                                                        onChange={this.changeField}
                                                        fullWidth
                                                        type="password"
                                                        margin="normal"

                                                    />
                                                </Grid>

                                            </Grid>
                                            <Button
                                                style={{ marginTop: '30px' }}
                                                fullWidth
                                                type="submit"
                                                variant="contained"
                                                color="secondary"
                                                size="large"
                                                className={classes.submit}
                                            >
                                                Salveaza modificarile
                                </Button>
                                        </Grid>
                                    </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>

                        </form>
                    </div>

                <FoooterBlack />
                </main>
               
            </React.Fragment >
        );
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile); 