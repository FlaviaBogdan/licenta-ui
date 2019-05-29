import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ButtonQuiz from './OpenQuizDialog'
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
    epNextSummary2: {
        backgroundColor: '#F0F0F0',
        width: 'inherit',
        color: 'black',
        '&:hover': {
            backgroundColor: '#F0F0F0',
            color: 'black',
        },
    },
    epNextContent2: {
        backgroundColor: '#F0F0F0',
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
                    <Typography variant="h5" gutterBottom paragraph>
                        Ce sunt structurile de date?
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom paragraph>
                        Structurile de date pe care le pune la dispozitie Java prin pachetul utility sunt foarte puternice si indeplinesc un numar mare de functii. Aceste structure de date consista in urmatoarele interfete si clase:
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom paragraph>
                        <ul>
                            <li> Enumerari</li>
                            <li> BitSet</li>
                            <li> Vector</li>
                            <li> Stiva</li>
                            <li> Dictionar</li>
                            <li> Propietati</li>
                        </ul>
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom paragraph>
                        Toate aceste clase sunt acum mostenite si Java-2 a introdus un nou set de framework-uri numite Collections Framework, care vor fi discutate in urmatorul capitol.
                    </Typography>
                </Grid >
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom paragraph>
                        Enumerari
                    </Typography>
                    <Grid item xs>
                        <ExpansionPanel color="secondary" style={{marginBottom:'10px'}}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.epNextSummary2} >
                      
                                <Typography className={classes.heading} style={{ marginLeft: '5px', }} >
                                    Ce sunt Enumerarile?
                                 </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.epNextContent2}>
                                <div>
                                    <Typography variant="subtitle1" style={{ color: 'black' }} paragraph>
                                        Interfata Enumerare nu este in sine o structura, dar este foarte importanta in contextual altor structure de date. Aceasta defineste un mod de a returna cu success elemente dintr-o structura
                                   </Typography>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                    <Typography variant="subtitle1" gutterBottom paragraph>
                        Spre exemplu, Enumerarile defines o metoda numita nextElement care este folosita pentru a prelua urmatorul element dintr-o structura de date care contine multiple elemente
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom paragraph>
                        Pentru mai multe informatii referitoare la aceasta structura, verifica The enumeration.
                    </Typography>
                </Grid >
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom paragraph>
                        BitSet
                    </Typography>
                    <Grid item xs>
                        <ExpansionPanel color="secondary" style={{marginBottom:'10px'}}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.epNextSummary} >
                        
                                <Typography className={classes.heading} style={{ marginLeft: '5px', }} >
                                    Ce este BitSet?
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.epNextContent}>
                                <div>
                                    <Typography variant="subtitle1" style={{ color: 'white' }} paragraph>
                                        Clasa BitSet implementeaza un grup de biti sau steaguri care pot fi setate sau sterse individual
                                    </Typography>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                    <Typography variant="subtitle1" gutterBottom paragraph>
                        Aceasta clasa este foarte utila in cazurile cand trebuie sa tii pasul cu un set de valori booleane, doar asignezi un bit fiecarei valori din set sau il stergi in functie de nevoi.
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom paragraph>
                        Pentru mai multe informatii referitoare la aceasta structura, verifica The BitSet.
                    </Typography>
                </Grid >

                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom paragraph>
                        Vectorul
                </Typography>
                    <Grid item xs>
                        <ExpansionPanel color="secondary" style={{marginBottom:'10px'}}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.epNextSummary2} >
     
                                <Typography className={classes.heading} style={{ marginLeft: '5px', }} >
                                    Ce este un Vector?
                    </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.epNextContent2}>
                                <div>
                                    <Typography variant="subtitle1" style={{ color: 'black' }} paragraph>
                                        Clasa Vector este similara cu un array traditional din Java, cu exceptia faptului ca dimensiunea acestuia poate creste daca este necesar sa acomodeze noi elemente
                        </Typography>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                    <Typography variant="subtitle1" gutterBottom paragraph>
                        Ca si un sir, elementele unui obiect de tipul vector pot fi accesate dupa index.
                </Typography>
                    <Typography variant="subtitle1" gutterBottom paragraph>
                        Lucrul dragut atunci cand folosesti un Vector este ca nu trebuie sa iti faci griji specificand o marime la creerea acestuia, pentru ca el isi schimba dimensiunea cand este necesar.
                </Typography>
                    <Typography variant="subtitle1" gutterBottom paragraph>
                        Pentru mai multe informatii referitoare la aceasta structura, verifica The Vector.
                </Typography>
                </Grid >

                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom paragraph>
                        Stiva
            </Typography>
                    <Grid item xs>
                        <ExpansionPanel color="secondary" style={{marginBottom:'10px'}}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.epNextSummary} >
        
                                <Typography className={classes.heading} style={{ marginLeft: '5px', }} >
                                    Ce este o Stiva?
                    </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.epNextContent}>
                                <div>
                                    <Typography variant="subtitle1" style={{ color: 'white' }} paragraph>
                                        Clasa Stiva implementeaza un last-in-first-out(LIFO) stiva de elemente.
                        </Typography>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                    <Typography variant="subtitle1" gutterBottom paragraph>
                        Poti sa te gandesti la o stiva ca fiind o stiva vertivala de obiecte, cand adaugi un nou elemente, acesta este adaugat deasupra celorlalte.
            </Typography>
                    <Typography variant="subtitle1" gutterBottom paragraph>
                        Cand scoti un element din stiva, acesta vine deasupra. In alte cuvinte, ultimul element pe care l-ai adaugat este primul cand vine vorba de stergere.
            </Typography>
                    <Typography variant="subtitle1" gutterBottom paragraph>
                        Pentru mai multe informatii referitoare la aceasta structura, verifica The Stack.
            </Typography>
                </Grid >

                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom paragraph>
                        Hashtable
            </Typography>
                    <Grid item xs>
                        <ExpansionPanel color="secondary" style={{marginBottom:'10px'}}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.epNextSummary2} >
            
                                <Typography className={classes.heading} style={{ marginLeft: '5px', }} >
                                    Ce este un HashTable?
                    </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.epNextContent2}>
                                <div>
                                    <Typography variant="subtitle1" style={{ color: 'black' }} paragraph>
                                        Clasa Hashtable ofera un mode de organizare a datelor bazat pe unele structuri cheie definite de user.
                        </Typography>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                    <Typography variant="subtitle1" gutterBottom paragraph>
                       Spre exemplu, in lista de adrese a unui hash table poti stoca si sorta date bazate pe chei cum ar fi codul ZIP mai degraba decat numele unei persoane.
            </Typography>
                    <Typography variant="subtitle1" gutterBottom paragraph>
                        Sensul sspecific al cheilor in ceea ce priveste tabelele hash este total dependent de felul in care este folosit tabelul hash si de datele pe care le contine
            </Typography>
                    <Typography variant="subtitle1" gutterBottom paragraph>
                        Pentru mai multe informatii referitoare la aceasta structura, verifica The HashTable.
            </Typography>
                </Grid >

                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom paragraph>
                        Propietati
            </Typography>
                    <Grid item xs>
                        <ExpansionPanel color="secondary" style={{marginBottom:'10px'}}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.epNextSummary} >
               
                                <Typography className={classes.heading} style={{ marginLeft: '5px', }} >
                                    Ce sunt Propietatile?
                    </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.epNextContent}>
                                <div>
                                    <Typography variant="subtitle1" style={{ color: 'white' }} paragraph>
                                       Propietatile sunt o subclasa a HashTable. Sunt folosite pentru a mentine liste de valori unde cheia este un String si valoarea este de asemenea un String.
                        </Typography>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                    <Typography variant="subtitle1" gutterBottom paragraph>
                       Clasa Propieties este folosita de multe alte clase Java. Spre exemplu este tipul de obiect returnat de catre <i>System.getProperties()</i> cand vrem sa obtinem valorile globale.
            </Typography>
  
                    <Typography variant="subtitle1" gutterBottom paragraph>
                        Pentru mai multe informatii referitoare la aceasta structura, verifica The Properties.
            </Typography>
                </Grid >

                <Grid item xs={12}>
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
                <Grid item xs={12}>
                        <ButtonQuiz Name={"Structuri de date"}/>
                    </Grid>
            </Grid>
        </div >

    )
}
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);