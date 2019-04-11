import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Typography, Divider } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Table from '@material-ui/core/Table';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import ReactDOM from 'react-dom';
import Select from '@material-ui/core/Select';
import TableBody from '@material-ui/core/TableBody';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ReactCodeSinppet from 'react-code-snippet'

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

class BasycSyntax extends React.Component {

    constructor(props) {
        super(props);
    }
    state = {
        labelWidth: 0,
        selectedDate: new Date('2014-08-18T21:11:54'),
        age: '',
    };

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };


    render() {
        const { selectedDate } = this.state;
        const { classes } = this.props;
        return (
            <div >
                <div className={classes.root}>
                    <Grid container className={classes.containerCentered} spacing={40} direction="column" >
                        <Grid item style={{ height: "100%", backgroundColor: '	 #ad1457' }} >

                            <Grid container direction="column" spacing={40} style={{ height: 'inherit', width: 'inherit' }}>
                                <Grid item xs></Grid>
                                <Grid item xs>
                                    <div className={classes.mainFeaturedPostContent}>
                                        <img src={require('./edit.png')} className={classes.rightIcon} />
                                        <Typography variant="h6" style={{ color: 'white' }} gutterBottom>
                                            Editeaza profilul
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
                                                Nume
                                        </Typography>
                                        </Grid>
                                        <Grid item xs className={classes.textField}>
                                            <TextField
                                                id="outlined-email-input"
                                                label="Nume"

                                                fullWidth
                                                margin="normal"
                                                variant="outlined"
                                            />
                                            <Typography variant="subtitle2" >
                                                Doar tu vezi numele.
                                    </Typography>
                                        </Grid>
                                    </Grid>


                                    <Grid container spacing={8} direction="row" className={classes.containerText}>
                                        <Grid item xs={2} className={classes.containerText}>
                                            <Typography variant="subtitle1" className={classes.textRight}>
                                                Prenume
                                        </Typography>
                                        </Grid>
                                        <Grid item xs className={classes.textField}>
                                            <TextField
                                                id="outlined-name"
                                                label="Prenume"
                                                fullWidth
                                                margin="normal"
                                                variant="outlined"
                                            />
                                            <Typography variant="subtitle2" >
                                                Profilul tau public afiseaza doar prenumele tau. Doar tu vezi atat numele cat si prenumele.
                                    </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={8} direction="row" className={classes.containerText}>
                                        <Grid item xs={2} className={classes.containerText}>
                                            <Typography variant="subtitle1" className={classes.textRight} >
                                                Varsta
                                        </Typography>
                                        </Grid>
                                        <Grid item xs className={classes.textField}>
                                            <FormControl variant="outlined" className={classes.formControl}>
                                                <InputLabel
                                                    ref={ref => {
                                                        this.InputLabelRef = ref;
                                                    }}
                                                    htmlFor="outlined-age-native-simple"
                                                >
                                                    Varsta
                                                    </InputLabel>
                                                <Select
                                                    native
                                                    value={this.state.age}
                                                    onChange={this.handleChange('age')}
                                                    input={
                                                        <OutlinedInput
                                                            name="age"
                                                            labelWidth={this.state.labelWidth}
                                                            id="outlined-age-native-simple"
                                                        />
                                                    }
                                                >
                                                    <option value="" />
                                                    <option value={10}>Masculin</option>
                                                    <option value={20}>Feminin</option>
                                                    <option value={30}>Nespecificat</option>
                                                </Select>
                                            </FormControl>
                                            <Typography variant="subtitle2" >
                                                Folosim aceste informatii pentru statistici, nu o sa le impartim cu nimeni.
                                            </Typography>

                                        </Grid>

                                    </Grid>

                                    <Grid container spacing={8} direction="row" className={classes.containerText}>
                                        <Grid item xs={2} className={classes.containerText}>
                                            <Typography variant="subtitle1" className={classes.textRight}>
                                                Data nasterii
                                        </Typography>
                                        </Grid>
                                        <Grid item xs className={classes.textField}>
                                            <TextField
                                                id="date"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                            <Typography variant="subtitle2" >
                                                Ziua magica cand ai fost aruncat din cer si ai ajuns pe Pamant. Folosim aceste date pentru statistici si nu o sa le impartim cu nimeni.
                                            </Typography>
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
                                                id="outlined-name"
                                                label="Email"
                                                fullWidth
                                                margin="normal"
                                                variant="outlined"
                                            />
                                            <Typography variant="subtitle2" >
                                                Adresa ta de e-mail nu o sa fie publica pentru nimeni, cu exceptia ta.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>

            </div>
        )
    }
}

BasycSyntax.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasycSyntax);