import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography, Divider } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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
    card: {
        minHeight: 180,
        backgroundColor : '#F0F0F0',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        fontFamily: 'Verdana,sans-serif',
        color: 'inherit',
    },

    epSumaary: {

        backgroundColor: '#D8D8D8',
        color: 'black',
        '&:hover': {
            backgroundColor: '#808080',
            color: 'white',
        },
    },

    rootTable: {
        width: '100%',
        margin: theme.spacing.unit * 2,
        overflowX: 'auto',
    },
    table: {
        minWidth: 600,
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
    margin: {
        margin: theme.spacing.unit,
      },
      rightIcon: {
        marginLeft: theme.spacing.unit,
      },

    epNextContent: {
        backgroundColor: '#ad1457',
    },

    epContent: {
        backgroundColor: '#D8D8D8',
    },

    dividerStyle: {
        border: 0,
        borderTopWidth: '4em',
        margin: '20px',
    }

});

let id = 0;
function createData(w1, w2, w3, w4, w5, w6) {
    id += 1;
    return { id, w1, w2, w3, w4, w5, w6 };
}

const rows = [
    createData('abstract', 'assert', 'boolean', 'break', 'byte', 'case'),
    createData('catch', 'char', 'class', 'const', 'continue', 'default'),
    createData('do', 'double', 'else', 'enum', 'extends', 'final'),
    createData('finally', 'float', 'for', 'goto', 'if', 'implements'),
    createData('import', 'instanceof', 'int', 'interface', 'long', 'native'),
    createData('new	package', 'private', 'protected', 'public', 'return'),
    createData('hort', 'static', 'strictfp', 'super', 'switch', 'synchronized'),
    createData('this', 'throw', 'throws', 'transient', 'try', 'void'),
];

const listBasicSyntax = [
    {
        title: 'Obiectele',
        description: 'Obiectele au atribute si comportament. Spre exemplu: un caine are atributele: culoare, nume rasa si comportamentul de a-si misca coada, a latra si a manca. Un obiect este o instanta a clasei.',
    },
    {
        title: 'Clasa',
        description: 'O clasa poate fi definita de catre un template care descrie comportamentul/atributele obiectelor suportate de clasa',
    },
    {
        title: 'Metodele',
        description: 'O metoda este un comportament. O clasa poate contine mai multe metote. In metode este scrisa logica, sunt manipulate datele si sunt executate toate actiunile',
    },
    {
        title: 'Variabile de instanta',
        description: 'Fiecare obiect are setul lui unic de variabile de instanta. Atributele unui set sunt create prin valori asignate acestor variabile de instanta',
    },

];
function BasycSyntax(props) {
    const { classes } = props;
    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom>Sintaxa de baza</Typography>
                        <Typography variant="subtitle1" paragraph>
                            Cand consideram un program Java, el este definit ca si o colectie de obiecte care comunica intre ele invocand metode. O sa descriem foarte scurt ce inseamna o <i>clasa, obiect, metode si variabile de instanta: </i>
                        </Typography>
                        <Grid container spacing={24}>
                            {listBasicSyntax.map(item => (
                                <Grid item xs>
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <div className={classes.body}>
                                                <Typography className={classes.title} color="white" gutterBottom>
                                                    {item.title}
                                                </Typography>
                                                <Typography component="p">
                                                    {item.description}
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Puncte importante</Typography>
                        <Typography variant="subtitle1" paragraph>
                            Cand vorbim despre un program Java este important sa avem in minte urmatoarele lucruri:
                    </Typography>
                        <Typography variant="subtitle1" paragraph>
                            <ul>
                                <li>
                                    <b>Sensibilitatea la majuscule</b> - Java este un program sensibil la majuscule, ceea ce inseamna ca <i> Hello</i> si <i>hello</i> au sensuri diferite in Java.</li>
                                <li>
                                    <b>Numele claselor</b> - Pentru toate clasele prima litera ar trebui sa fie o majuscula. Daca trebuie sa folosim mai multe cuvinte pentru a forma numele unei clase, fiecare litera de la inceputul cuvantului trebuie sa fie o majuscula.
                                    <ReactCodeSinppet lang="java" code={`class MyFirstJavaProgram`} />
                                </li>
                                <li>
                                    <b>Numele metodelor</b> - Toate numele metodelor trebuie sa inceapa cu o litera mica.  Daca trebuie sa folosim mai multe cuvinte pentru a forma numele unei metodei, fiecare litera de la inceputul cuvantului trebuie sa fie o majuscula.
                                    <ReactCodeSinppet lang="java" code={`public void myMethodName()`}>
                                    </ReactCodeSinppet>
                                </li>
                                <li>
                                    <b>Numele fisierului programului</b> - Numele fisierului programului ar trebui sa fie acelasi cu numele clasei<br />
                                    Cand salvez disierul ar trebui sa folosesti numele clasei si a adaugi <i>'.java'</i> la sfarsitul numelui(daca numele fisierului si al clasei nu se potrivesc, programul nu o sa compileze).<br />

                                </li>
                                <li>
                                    <b>public static void main(String args[])</b> - Un program java incepe prin compilarea metodei main() care este OBLIGATORIE in orice program Java.
                            </li>
                            </ul>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.epNextSummary} >
                                    <Typography className={classes.heading} style={{ marginLeft: '5px', }} >
                                        Daca nu exista o clasa publica in acel fisier atunci numele fisierului poate sa fie diferit. Nu e obligatoriu sa existe o clasa publica intr-un fisier.</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className={classes.epNextContent}>
                                    <div>
                                        <Typography variant="subtitle1" style={{ color: 'white' }} paragraph>
                                            Spre exemplu numele clasei este <i>'MyFirstJavaClass()'</i>. Fisierul ar trebui salvat cu numele <i>'MyFirstJavaClass.java'</i>

                                        </Typography>
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Typography>
                        <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Identificatori Java</Typography>
                        <Typography variant="subtitle1" paragraph>
                            Orice componenta java trebuie sa aiba nume. Numele folosite pentru clase, variabile si metode se numesc <b>identificatori</b>.
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            In Java, sunt cateva lucruri care trebuie mentionate despre identificatori. Acestea sunt:
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            <ul>
                                <li>
                                    Toti identificatori trebuie sa inceapa cu o litera (a-z sau A-Z), caracterul $ sau _.
                            </li>
                                <li>
                                    Dupa primul caracter, identificatori pot fi orice combinatie de caractere
                            </li>
                                <li>
                                    Un cuvant cheie nu poate fi folosit ca identificatori.
                            </li>
                                <li>
                                    <i>Cel mai important</i>, identificatorii sunt sensibili la majuscule.
                            </li>
                            </ul>

                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.epNextSummary} >

                                    <Typography className={classes.heading} style={{ marginLeft: '5px', }}>Exemple de identificatori</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className={classes.epNextContent}>
                                    <div>
                                        <Typography variant="subtitle1" paragraph style={{ color: 'white' }}>
                                            Exemple de identificatori corecti: age, $salary, _value, __1_value
                                                </Typography>
                                        <Typography variant="subtitle1" paragraph style={{ color: 'white' }}>
                                            Exemple de identificatori gresiti: 123sabc, -salary
                                                </Typography>
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            Și lista poate continua. Java este programul pe care te poți baza în orice domeniu.
                    </Typography>
                    <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Modificatori </Typography>
                        <Typography variant="subtitle1" paragraph>
                            Ca si in alte limbaje de programare, este posibil sa modifici clase, metode etc. cu ajutorul modificatorilor. Exista doua categorii de modificatori:
                    </Typography>
                        <Typography variant="subtitle1" paragraph>
                            <ol>
                                <li>
                                    <b>Modificatori de acces</b>: default, public, protected, private
                            </li>
                                <li>
                                    <b>Modificatori care nu sunt de acces</b>: final, abstract, strictfp
                            </li>
                            </ol>
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            O sa studiem mai in detaliu acesti modificatori in urmatoarele tutoriale.
                    </Typography>
                    <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Variabile</Typography>
                        <Typography variant="subtitle1" paragraph>
                            Mai jos sunt enumerate tipurile de variabile din java:
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            <ul>
                                <li>
                                    Variabile locale
                            </li>
                                <li>
                                    Variabile de clasa(variabilestatice)
                            </li>
                                <li>
                                    Variabile de instanta( variabile non-statice)
                            </li>
                            </ul>
                        </Typography>
                        <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Siruri</Typography>
                        <Typography variant="subtitle1" paragraph>
                            Sirurile sunt obiecte care stocheaza mai multe variabile de acelasi tip. Un sir este in sine un obiect. O sa vedem cum sa declaram, construim si initializam sirurile in capitolele urmatoare.
                        </Typography>
                        <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Enumeratori</Typography>
                        <Typography variant="subtitle1" paragraph>
                            Enumeratori au fost introdusi in Java 5.0. Acestia restrictioneaza o variabila sa aiba o valoare dintre cateva valori predefinite. Valorile acestei liste sunt numite enumeratori.
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            Cu ajutorul enumeratorilor e posibil sa reduci numarul bug-urilor din codul tau.
                        </Typography>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.epNextSummary} >

                                <Typography className={classes.heading} style={{ marginLeft: '5px', }}>Exemplu</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.epNextContent}>
                                <div>
                                    <Typography variant="subtitle1" paragraph style={{ color: 'white' }}>
                                        Daca consideram o aplicatie pentru un bar este posibil sa restrictionam marimea paharelor la mic, mediu sau mare. Astfel o sa ne asiguram ca nu exista posibilitatea ca cineva sa comande un pahar cu o marime diferita de mic, mediu sau mare.

                                                </Typography>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <Grid item xs={12}>
                            <Card >
                                <CardContent>
                                    <div>
                                        <Typography variant="h6" gutterBottom>Exemplu</Typography>
                                        <ReactCodeSinppet lang="java" code={`class FreshJuice {
    enum FreshJuiceSize{ SMALL, MEDIUM, LARGE }
    FreshJuiceSize size;
    }

    public class FreshJuiceTest {

        public static void main(String args[]) {
            FreshJuice juice = new FreshJuice();
            juice.size = FreshJuice.FreshJuiceSize.MEDIUM ;
            System.out.println("Size: " + juice.size);
        }
    }`} />
                                    </div>
                                    <div className={classes.actions}>
                                        <Button variant="contained" color="secondary" size="medium" className={classes.margin} target="_blank" href="http://tpcg.io/y2azyW">
                                            Ruleaza codul
                                    <img src={require('./Icons/RunCode.png')} className={classes.rightIcon} />
                                        </Button>
                                    </div>
                                </CardContent>
                                <CardActions>

                                </CardActions>
                            </Card>
                        </Grid>

                        <Typography variant="h6" gutterBottom>Exemplul de mai sus o sa aiba urmatoru rezultat:</Typography>
   
                        <ReactCodeSinppet lang="java" code={`Size: MEDIUM`} />
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.epNextSummary} >

                                <Typography className={classes.heading} style={{ marginLeft: '5px', }}>Notita</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.epNextContent}>
                                <div>
                                    <Typography variant="subtitle1 paragraph" style={{ color: 'white' }}>
                                        Enumeratori pot fi declarati independent sau in interiorul unei clase. Metodele, variabilele, constructorii pot fi declarati in interiorul enumeratorilor.
                                    </Typography>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <Divider/>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Cuvinte de baza</Typography>
                        <Typography variant="subtitle1" paragraph>
                            Urmatoarea lista arata cuvintele rezervate din Java. Aceste cuvinte rezervate nu trebuie folosite ca si variabile sau constante sau ca identificatori.
                        </Typography>
                        <Paper className={classes.rootTable}>
                            <Table className={classes.table}>

                                <TableBody>
                                    {rows.map(row => (
                                        <TableRow key={row.id}>

                                            <TableCell align="center">{row.w1}</TableCell>
                                            <TableCell align="center">{row.w2}</TableCell>
                                            <TableCell align="center">{row.w3}</TableCell>
                                            <TableCell align="center">{row.w4}</TableCell>
                                            <TableCell align="center">{row.w5}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>

                            </Table>
                        </Paper>
                        <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Comentarii</Typography>
                        <Typography variant="subtitle1" paragraph>
                            In Java exista comentarii pe o singura linie sau pe mai multe linii, similare cu cele din C sau C++. Toate caracterele din interiorul unui comentariu sunt ignorate de catre compiler-ul Java.
                        </Typography>
                        <Grid item xs={12}>
                            <Card >
                                <CardContent>
                                    <div>
                                        <Typography variant="h6" gutterBottom>Exemplu</Typography>
                                        <ReactCodeSinppet lang="java" code={`public class MyFirstJavaProgram {

/* This is my first java program.
 * This will print 'Hello World' as the output
 * This is an example of multi-line comments.
 */

public static void main(String []args) {
   // This is an example of single line comment
   /* This is also an example of single line comment. */
   System.out.println("Hello World");
    }
}`} />
                                    </div>
                                    <div className={classes.actions}>
                                        <Button variant="contained" color="secondary" size="medium" className={classes.margin} target="_blank" href="http://tpcg.io/xiBKJn">
                                            Ruleaza codul
                                    <img src={require('./Icons/RunCode.png')} className={classes.rightIcon} />
                                        </Button>
                                    </div>
                                </CardContent>
                                <CardActions>

                                </CardActions>
                            </Card>
                        </Grid>
            
                        <Typography variant="h6" gutterBottom>Rezultat</Typography>
                        <ReactCodeSinppet lang="java" code={`Hello World`} />
                        <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Folosirea spatilor goale</Typography>
                        <Typography variant="subtitle1">
                            O linie care contine doar spatii goale, posibile cu un comentariu, este cunoscuta ca si o linie goala si Java o ignora in totalitate.
                        </Typography>
                        <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Mostenirea</Typography>
                        <Typography variant="subtitle1">
                            In Java clasele pot fi derivate din alte clase. Daca doresti sa creezi o noua clasa si deja exista o alta clasa care are cod pe care ti-l doresti este posibil sa derivezi noua ta clasa din clasa in care exista codul.
                        </Typography>
                        <Typography variant="subtitle1">
                            Acest concept iti premite sa refolosesti field-urile si metodele clasei existente fara a fi nevoit sa rescri codul in noua ta clasa. In acest scenariu, clasa existenta se numeste <b>superclass</b> si clasa derivata este numita <b>subclass</b>.
                        </Typography>
                        <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Interfete</Typography>
                        <Typography variant="subtitle1">
                            In limbajul de programare Java, o interfata poate fi definita ca si <i>contractul</i> comunicarii intre doua obiecte. Interfetele joaca un rol impotant cand vine vorba de conceptul de mostenire.
                        </Typography>
                        <Typography variant="subtitle1">
                            O interfata defineste metodele pe care o clasa derivata(subclasa) ar trebui sa le foloseasca, dar implementarea metodelor tine de subclasa, nu de superclasa.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.epNextSummary} >
                                <img src={require('./Icons/Question_Icon.png')} />
                                <Typography className={classes.heading} style={{ marginLeft: '5px' }} >
                                    Ce urmeaza?
                    </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.epNextContent}>
                                <div>
                                    <Typography variant="subtitle1" style={{ color: 'white' }}>
                                        In urmatorul capitol vei invata cum sa iti instalezi Java si sa accesezi documentatia acesteia.
                         </Typography>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

BasycSyntax.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasycSyntax);