import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ReactCodeSinppet from 'react-code-snippet';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        color: '#FFF',
        color: theme.palette.text.secondary,
        margin: theme.spacing.unit * 2,
    },

    typographyText: {
        variant: 'body1',
    },

    card: {
        display: "grid",
        gridTemplateRows: "1fr auto",
        gridGap: "8px",
        backgroundSize: "cover",
        minHeight: 147,
        color: 'white',
        marginBottom: 25,
    },

    margin: {
        margin: theme.spacing.unit,
      },
      rightIcon: {
        marginLeft: theme.spacing.unit,
      },

    body: {
        alignSelf: "end",
        textAlign: "center"
    },

    actions: {
        display: "flex",
        justifyContent: "space-between"
    },


    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        fontFamily: 'Verdana,sans-serif',
        color: 'inherit',
    },


    fifthStep: {
        backgroundColor: '#9e9e9e',
        color: 'black',
        '&:hover': {
            backgroundColor: '#616161',
            color: 'white',
        },
    },


    fifthStepContent: {
        backgroundColor: '#616161',
    },


    epNextSummary: {
        backgroundColor: '#ad1457',
        width: 'inherit',
        color: 'white',
        '&:hover': {
            backgroundColor: '#ad1457',
            color: 'white',
        },
    },

    epNextContent: {
        backgroundColor: '#ad1457',
    },

});

let image1 = <img src={require('./Images/system.png')} />
let image2 = <img src={require('./Images/system2.png')} />
let image3 = <img src={require('./Images/system3.png')} />
let image4 = <img src={require('./Images/system4.png')} />
const steps = [
    {
        title: 'Pasul 1',
        image: image1,
    },
    {
        title: 'Pasul 2',
        image: image2,
    },
    {
        title: 'Pasul 3',
        image: image3,
    },
    {
        title: 'Pasul 4',
        image: image4,
    },

];

class CenteredGrid extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
          window.scrollTo(0, 0)
        }
    render(){
    const { classes } = this.props;
    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>Instalare</Typography>
                    <Typography variant="subtitle1" paragraph>
                        Daca nu lucrezi pe calculatorul propiu sau daca vrei sa verifici daca Java e instalata pe laptopul tau, cauta in bara de cautare Java sau scrie in linia de comanda:
                    </Typography>
                    <Paper className={classes.paper} style={{ backgroundColor: 'black', color: 'white', fontFamily: 'Consolas,courier new' }} >C:\Users\Your Name>java -version</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1 paragraph">
                        In cazul in care java e instalata o sa vezi ceva asemanator cu: (depinde de versiune)
                    </Typography>
                    <Paper className={classes.paper} style={{ backgroundColor: 'black' }} >
                        <Typography variant="body1" style={{ color: 'white', fontFamily: 'Consolas,courier new' }}>java version "11.0.1" 2018-10-16 LTS</Typography>
                        <Typography variant="body1" style={{ color: 'white', fontFamily: 'Consolas,courier new' }}>Java(TM) SE Runtime Environment 18.9 (build 11.0.1+13-LTS)</Typography>
                        <Typography variant="body1" style={{ color: 'white', fontFamily: 'Consolas,courier new' }}>Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.1+13-LTS, mixed mode)</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1" paragraph>
                        Daca nu aveti java instalata pe computer o puteti instala direct de la
                        <a href="https://www.oracle.com/technetwork/java/javase/overview/index.html" target="_blank"> oracle.com</a>
                    </Typography>
                    <Divider/>
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h6" gutterBottom>Setup pentru Windows</Typography>
                    <Typography variant="subtitle1" paragraph>
                        Pentru a instala Java pe Windows:
                        <ol>
                            <li>Cauta <i>"Sistem properties"</i> care poate fi gasit in Control Panel -> System and Security -> System -> Advanced system Settings</li>
                            <li>Da click pe butonul <b>"Environment variables"</b> care este localizat dedesubt de tab-ul "Advanced"</li>
                            <li>Apoi, selecteaza variabila "Path" din variabilele sistemului si da click pe butonul de <i>"Edit"</i></li>
                            <li>Apasa click pe butonul "New" si adauga path-ul unde este instalata Java, urmat de \bin. In mod normal Java e instalata
                                in C:\Program Files\Java\jdk-11.0.1 (Daca nu ai specificat ceva diferit cand ai instalat-o). In acest cas, o sa trebuiasca sa
                                adaugi un nou path cu: C:\Program Files\Java\jdk-11.0.1\bin. Apoi,da click pe "OK", si salveaza setarile.</li>
                            <li>La final, deschide Command Prompt (cmd.exe) si scrie java -version
                                 pentru a vedea daca Java ruleaza pe calculatorul tau</li>
                        </ol>
                    </Typography>
                </Grid>
                <Grid container spacing={8} direction="row">
                    {steps.map(step => (
                        <Grid item xs={12}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.fifthStep} >
                                    <Typography className={classes.heading}>{step.title} </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className={classes.fifthStepContent}>
                                    <div>
                                        <h3>{step.totle}</h3>
                                        {step.image}
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.fifthStep}>
                                <Typography className={classes.heading}>Pasul 5 </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.fifthStepContent}>
                                <div>
                                    <Typography variant="subtitle1" style={{color:'white'}} paragraph >
                                        Scrie urmatorul cod in linia de comanda:
                                </Typography>
                                    <Paper className={classes.paper} style={{ backgroundColor: 'black', color: 'white', fontFamily: 'Consolas,courier new' }} >C:\Users\Your Name>java -version</Paper>
                                    <Typography variant="subtitle1" paragraph style={{color:'white'}}>
                                        In cazul in care java e instalata o sa vezi ceva asemanator cu:
                                </Typography>
                                    <Paper className={classes.paper} style={{ backgroundColor: 'black' }} >
                                        <Typography variant="body1" style={{ color: 'white', fontFamily: 'Consolas,courier new' }}>java version "11.0.1" 2018-10-16 LTS</Typography>
                                        <Typography variant="body1" style={{ color: 'white', fontFamily: 'Consolas,courier new' }}>Java(TM) SE Runtime Environment 18.9 (build 11.0.1+13-LTS)</Typography>
                                        <Typography variant="body1" style={{ color: 'white', fontFamily: 'Consolas,courier new' }}>Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.1+13-LTS, mixed mode)</Typography>
                                    </Paper>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>Java Quickstart</Typography>
                    <Typography variant="subtitle1" paragraph>
                        In Java, fiecare aplicatie incepe cu numele clasei si acest nume trebuie sa fie identic cu numele fisierului.
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Haide sa cream prmul nostru fisier Java numit MyFirstJavaProgram.java, aceasta poate fi creat in orice editor cum ar fi Notepad.
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Acest fisier o sa contina un mesaj <i>"Hello World"</i>, care este creat cu ajutorul urmatorului cod:
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Card >
                        <CardContent>
                            <div>
                            <Typography variant="h6" gutterBottom>Exemplu</Typography>
                                <ReactCodeSinppet lang="java" code={`public class MyFirstJavaProgram {

/* This is my first java program.
 * This will print 'Hello World' as the output
 */

    public static void main(String []args) {
        System.out.println("Hello World"); // prints Hello World
    }
}`}>

                                </ReactCodeSinppet>
                            </div>
                            <div className={classes.actions}>
                                <Button variant="contained" color="secondary" size="medium" className={classes.margin} target="_blank" href="http://tpcg.io/rdns3Q">
                                    Ruleaza codul
                                    <img src={require('./Icons/RunCode.png')} className={classes.rightIcon} />
                                </Button>
                             </div>
                        </CardContent>
                        <CardActions>
                            
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs  style={{marginBottom:'20px'}}>
                <ExpansionPanel color="secondary">
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.epNextSummary} >
                <img src={require('./Icons/Question_Icon.png')} />
                <Typography className={classes.heading} style={{ marginLeft: '5px', }} >
                    Ce urmeaza?
                    </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.epNextContent}>
                <div>
                    <Typography variant="subtitle1" style={{ color: 'white' }} paragraph>
                        In urmatorul capitol vei invata cum sa rulezi primul tau program Java si care sunt unele
                        dintre cele mai importante elemente de syntaza necesare pentru a programa.
                        </Typography>
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
                </Grid>
            </Grid >
 
        </div >
    )
}
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);