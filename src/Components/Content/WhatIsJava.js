import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, Divider } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import CssBaseline from '@material-ui/core/CssBaseline';



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        color: '#FFF',
        color: theme.palette.text.secondary,
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
        backgroundColor : '#F0F0F0',
        marginBottom: 25,
    },

    body: {
        alignSelf: "end",
        textAlign: "center"
      },
      
      actions: {
        display: "flex",
        justifyContent: "space-between"
      },

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        fontFamily: 'Verdana,sans-serif',
        color: 'inherit',
    },

    epSumaary: {
        backgroundColor: '#cccccc',
        color: 'black',
        '&:hover': {
            backgroundColor: '#808080',
            color: 'white',
        },
    },
    epNextSummary: {
        width: 'inherit',
        backgroundColor: '#ad1457',
        color: 'white',
        '&:hover': {
            backgroundColor: '#ad1457',
            color: 'white',
        },
    },

    epNextContent: {
        backgroundColor: '#ad1457',
    },

    epContent: {
        backgroundColor: '#808080',
    },

    dividerStyle: {
        border: 0,
        borderTopWidth: '4em',
        margin: '20px',
    }

});
const reasons = [
    {
        title: 'Diversitate',
        description:
            'Este disponibil pe cele mai multe dispozitive. Aici nu ne referim doar la computere, console, smartphone-uri, supercomputere, centre de data etc. Aproximativ 3 miliarde de aparate utilizează Java.',
    },
    {
        title: 'Usurinta',
        description:
            'Este creat astfel încât să elimine cele mai multe erori de programare – bug-uri. De aceea programatorii îl preferă.',
    },
    {
        title: 'Siguranta',
        description:
            'Este un limbaj foarte sigur, iar programele executate pe internet nu prezintă riscul de a fi infectate.',
    },

];

function CenteredGrid(props) {
    const { classes } = props;

    return (
        <div>
            <div className={classes.root}>
                <CssBaseline />
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom>Ce inseamna Java? La ce se foloseste?</Typography>
                        <Typography variant="subtitle1" color="inherit" paragraph>
                            Java este un limbaj de programare orientat-obiect de nivel înalt. Este un limbaj de programare cu scop general creat de Sun Microsystems.
                             </Typography>
                        <Typography variant="subtitle1" color="inherit" paragraph>
                            În cea mai mare parte, Java este utilizat pentru dezvoltarea aplicațiilor web,
                             dar se pot crea de la simple aplicații pentru mobil până la programe destinate
                             unor centre de date imense.
                    </Typography>
                    <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>De ce este atât de cunoscut și utilizat Java?</Typography>
                        <Typography variant="subtitle1" paragraph>
                            În topuri, indiferent că vorbim de număr de utilizatori, număr programatori, locuri de muncă sau altele, Java este pe locurile fruntașe. Această popularitate este datorată unor 3 mari factori:
                            </Typography>
                        <Grid container spacing={24}>
                            {reasons.map(reason => (
                                <Grid item xs>
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <div className={classes.body}>
                                            <Typography className={classes.title} color="white" gutterBottom>
                                                {reason.title}
                                            </Typography>
                                            <Typography component="p">
                                                {reason.description}
                                            </Typography>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        <Typography variant="subtitle1" paragraph>
                        </Typography>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.epSumaary}>
                                <Typography className={classes.heading} > Într-un grafic publicat de <a href="http://www.github.com" target="_blank"> Github.com</a> este prezentat clasamentul popularității limbajelor de programare de-a lungul anilor.</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.epContent}>
                                <div>
                                    <img src={require('./Images/ClasamentGithub.jpg')} width="1155" />
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Ce poti face cu Java?</Typography>
                        <Typography variant="subtitle1" paragraph>
                            Aproape orice fel de program la care te poți gândi. Java este un limbaj care poate fi compilat
                             atât local, cât și la distanță prin intermediul unui server. O dată cu revoluția telefoanelor
                             inteligente, Java a prins aripi și a devenit programul numărul unu în crearea de aplicații.
                             Să enumerăm câteva domenii de aplicare:
                            </Typography>
                        <Typography variant="subtitle1" paragraph>
                            <ul>
                                <li>Dezvoltarea aplicațiilor mobile: Câte aplicații aveți pe telefon? Singur ați jucat un CandyCrush
                        în drum spre serviciu. Aceste aplicații au fost create într-o combinație de Java/C.</li>
                                <li>Dezvoltarea site-urilor: Dacă vreți să puneți la punct un site care așteaptă milioane de click-uri
                         zilnice, Java este soluția. Însuși Twitter utilizează o mașină virtuală Java (JVM).</li>
                                <li>Conectarea la baze de date: Este util și pentru memorarea și extragerea datelor dintr-o bază de
                        date. Java utilizează aici interfața JDBC special creată pentru lucrul cu baze de date.</li>
                                <li>Dezvoltarea interfețelor grafice: Java îți dă voie să creezi programe care au aceeași interfață
                        indiferent de sistemul de operare. Acest lucru se realizează cu ajutorul claselor Java Swing</li>
                            </ul>
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            Și lista poate continua. Java este programul pe care te poți baza în orice domeniu.
                            </Typography>
                            <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Cât de ușor se învață Java?</Typography>
                        <Typography variant="subtitle1" paragraph>
                            V-aș putea spune că se învață foarte ușor, dar ca orice limbaj de programare, Java necesită puțin efort.
                             Dar în comparație cu alte limbaje (PHP, Ruby, Python) este mai ușor de înțeles. Să vă dau și câteva motive
                              pentru care Java se învață ușor:
                            </Typography>
                        <Typography variant="subtitle1" paragraph>
                            <ul>
                                <li>Fiind foarte popular Java beneficiază de cele mai multe resurse gratuite de învățare online.</li>
                                <li>Java are o sintaxă făcut să ”ocolească” erorile. Nu este atât de strict precum C++, de exemplu.</li>
                                <li>Chiar dacă se spune că limbajele orientate-obiect sunt mai grele, Java are o serie de îmbunătățiri,
                            cum ar fi controlul automat al memoriei care înlesnește programarea.</li>
                            </ul>
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            Cu puțină răbdare și dedicare în doar câteva zile puteți deprinde bazele programării în Java. Pe urmă vă puneți
                            serios pe practică și în maxim 1 an puteți deveni un programator mediu spre avansat.
                    </Typography>
                    <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Ce salariu are un programator Java?</Typography>
                        <Typography variant="subtitle1" paragraph>
                            Vă spuneam de la început că indiferent de limbajul de programare studiat veți
                             găsi foarte ușor de lucru, iar salariul nu va fi deloc de neglijat. Este adevărat
                             că a știi programare este un avantaj imens într-o piață care duce lipsă de profeniști în acest domeniu.
                             </Typography>
                        <Typography variant="subtitle1" paragraph>
                            Pentru un programator junior, indiferent că știe Java sau PHP, salariul pleacă de la 500 euro net. Când ați mai auzit de un
                            job așa de bine plătit pentru o persoană fără experiență. Pentru programator senior salariul începe de la 1500 euro și poate
                            crește foarte mult.
                         </Typography>
           
                    </Grid>
                    <Grid item xs={12}>

                    </Grid>
                </Grid>
            </div>

            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.epNextSummary} >
                    <img src={require('./Icons/Question_Icon.png')} />
                    <Typography className={classes.heading} style={{ marginLeft: '5px', }} >
                        Ce urmeaza?
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.epNextContent}>
                    <div>
                        <Typography variant="subtitle1" style={{ color: 'white', textAlign: 'center', }}>
                            In urmatorul capitol vei invata cum sa iti instalezi Java si sa accesezi documentatia acesteia.
                        </Typography>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);