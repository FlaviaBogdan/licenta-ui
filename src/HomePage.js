import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import Image from '../../images/background.jpg'; // Import using relative path
import SearchForm from '../utils/SearchForm'
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';


const styles = theme => ({
    grid: {
        width: '100%',
    },

    boxForMargins: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 15,
        marginRight: theme.spacing.unit * 15,
        marginTop: theme.spacing.unit * 15,
    
      },
    borderGrey: {
        border: 2,
        borderStyle: "solid",
        borderColor: '#D8D8D8',
        marginBottom: 20,
    },

    inputRoot: {
        color: 'black',
        width: '100%',
    },
    inputInput: {
        backgroundColor: '#FFFFFF',
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },

    layoutSpacing:{
        paddingRight: theme.spacing.unit * 10,
        paddingTop: theme.spacing.unit * 10,
        paddingBottom: theme.spacing.unit * 10,
        paddingLeft: theme.spacing.unit * 10,
    },
    gridShadow: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        marginBottom: 120,
        marginTop: 120,
    },

    BorderWithoutRight: {
        textAlign: 'center',
        //padding: theme.spacing.unit * 50,
        backgroundColor: "#F0F0F0",
        //marginBottom: 120,
        //marginTop: 120,
    },
    footer: {
        backgroundColor: 'black',
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
    },

    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    },
    boxForMargins: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 15,
        marginRight: theme.spacing.unit * 15,
        marginTop: theme.spacing.unit * 15,

    },

    pContentBox4: {
        marginBottom: theme.spacing.unit * 15,
    },

    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
    mainFeaturedPost: {
        backgroundImage: `url(${Image})`,
        color: theme.palette.common.white,
        height: '30rem',
        margin: 'auto',
    },

    marginBox3: {
        padding: 10,
    },


    mainFeaturedPostContent: {

        textAlign: 'center',

    },
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    markdown: {
        padding: `${theme.spacing.unit * 3}px 0`,
    },
    sidebarAboutBox: {
        padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing.unit * 3,
    },
    footer: {
        backgroundColor: '#212121',
        color: 'white',
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
    margin: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    paperRadius: {

        display: 'flex',
        flexWrap: 'wrap',

        backgroundColor: 'white',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        borderRadius: '60px',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },

    divider: {
        width: 1,
        height: 'inherit',
        margin: 4,
    },

    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const listBasicSyntax = [
    {
        title: "TEST",
        descr: "TESTTTTTTTTTTTTTTTTTTTTTTTTTtTDdddddcTA",
    },
    {
        title: "TEST",
        descr: "TESTTTTTTTTTTTTTTTTTTTTTTTTTtTDdddddcTA",
    },
    {
        title: "TEST",
        descr: "TESTTTTTTTTTTTTTTTTTTTTTTTTTtTDdddddcTA",
    }]
class HomePage extends React.Component {

    constructor(props) {
        super(props);
    }
    state = {
        // The first commit of Material-UI
        selectedDate: new Date('2014-08-18T21:11:54'),
    };

    handleDateChange = date => {
        this.setState({ selectedDate: date });
    };

    render() {
        const { classes } = this.props;
        const { selectedDate } = this.state
        return <> <Grid item style={{ height: '1rem' }} /><Paper className={classes.mainFeaturedPost}>
            <Grid container direction="column" spacing={40} style={{ height: 'inherit', width: 'inherit' }}>
                <Grid item xs></Grid>
                <Grid item xs>
                    <div className={classes.mainFeaturedPostContent}>
                        <Typography variant="h4" color="inherit" paragraph>
                            Cursurile noastre sunt destinate atat novicilor cat si avansatilor. Va asteptam!
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            Cursurile noastre sunt destinate atat novicilor cat si avansatilor. Va asteptam!
                        </Typography>
                        <Grid container direction="row" spacing={24}>
                            <Grid item xs={2} />
                            <Grid item xs>
                                <Grid className={classes.container} noValidate autoComplete="off" direction="row">

                                    <Grid item xs>
                                        <TextField
                                            id="standard-uncontrolled"
                                            label="Where"
                                            defaultValue="foo"
                                            className={classes.textField}
                                            margin="normal"
                                        />

                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <DatePicker
                                                margin="normal"
                                                label="From"
                                                value={selectedDate}
                                                onChange={this.handleDateChange}
                                            />
                                            <TimePicker
                                                margin="normal"
                                                label=" "
                                                fontSize="3em"
                                                value={selectedDate}
                                                onChange={this.handleDateChange}
                                            />
                                        </MuiPickersUtilsProvider>

                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <DatePicker
                                                margin="normal"
                                                label="To"
                                                value={selectedDate}
                                                onChange={this.handleDateChange}
                                            />
                                            <TimePicker
                                                margin="normal"
                                                label=" "
                                                value={selectedDate}
                                                onChange={this.handleDateChange}
                                            />
                                        </MuiPickersUtilsProvider>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <SearchIcon />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={2} />
                        </Grid>

                    </div>
                </Grid>
                <Grid item xs></Grid>
            </Grid>

             <Grid container direction="row" className={classes.boxForMargins}>
            <Grid item xs style={{ alignItems: "center" }}>
              <Grid container spacing={24} direction="column" style={{ paddingTop: 30 }}>
                <Grid item xs={7} >
                  <Typography variant="h4" gutterBottom>
                    Noi va ajutam sa invatati Java
              </Typography>
                </Grid>
                <Grid item xs >
                  <Typography variant="h6">
                    Crezi ca nu o sa poti invata niciodata sa programezi? Noi iti punem la dispozitie cursurile necesare pentru a invata Java si a deveni dintr-un novice un expert!
              </Typography>
                </Grid>
                <Grid item xs >
                  <Typography variant="h4" gutterBottom>
                    De ce facem asta?
              </Typography>
                </Grid>
                <Grid item xs >
                  <Typography variant="h6">
                    Pentru că știm ce oportunitate imensă reprezintă aceste cunoștințe atât pentru cei aflați la început de drum profesional, cât și pentru cei care au curajul să reinvestească efort într-o nouă carieră.
              </Typography>

                </Grid>
                <Grid item xs style={{ alignSelf: "center" }}>
                
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs>
              <img src={require('./test.jpeg')} style={{ alignItems: "center", width: 700, height: 500 }} />
            </Grid>
          </Grid>
            <Grid container spacing={24} className={classes.layoutSpacing}>
            {listBasicSyntax.map(item => (
                <Grid item key="test" sm={4} md={4} >
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={require('./test.jpeg')}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.title}
                                </Typography>
                                <Typography component="p">
                                {item.descr}
                                 </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                             </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
            </Grid>
        </Paper>
        </>
    }
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);