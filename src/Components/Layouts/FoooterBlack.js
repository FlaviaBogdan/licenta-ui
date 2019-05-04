import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DialogRegister from '../Dialogs/DialogRegister'
import DialogLogin from '../Dialogs/DialogLogin'
import Footer from './Footer'
import Menu from '../BodyContent/Menu'
const styles = theme => ({

  borderGrey: {
    border: 2,
    borderStyle: "solid",
    borderColor: '#D8D8D8',
    marginBottom: 20,
  },

  gridShadow:{
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
    backgroundColor: '#212121',
    color: theme.palette.common.white,
    height: 600,
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
  }
});
let colorBlue = "#1E90FF";
const featuredPosts = [
  {
    title: 'Învaţă online',
    date: 'Comfortabil',
    description:
      'Învață de acasă, în pauze sau în cafeneaua ta preferată.',
  },
  {
    title: 'Sarcini interactive',
    date: 'Diversitate',
    description:
      'Poți găsi peste 100 de ore de lecții interactive și clipuri video, indiferent de nivelul tău de cunoștințe.',
  },
  {
    title: 'Începe de la zero',
    date: 'Adaptabilitate',
    description:
      'Poți începe cursurile ca novice, fără să fi învățat ceva anterior.',
  },

];
const chaptersDescriptions = [
  {
    title: 'Tutoriale Java',
    dificulty: 'Incepator',
    description:
      'Acest tutorial este destinat incepatorilor care doresc sa invete Java. Aici poti invata cum sa iti instalezi Java, ce inseamna clase, metode, variabile si care este sintaxa de baza al acestui limbaj de programare',
    color: colorBlue,
    goTo: "Beginner",
  },
  {
    title: 'POO in Java',
    dificulty: '',
    description:
      'Pentru cei care au cunostinte despre programare, acest tutorial o sa va invete cum se aplica principiile programarii orientate pe obiect in Java, precum si ce inseamna Interfetele si Pachetele.',
    color: '#FFF',
    goTo: 'Medium',
  },
  {
    title: 'Tutoriale Avansate',
    dificulty: 'Dificil',
    description:
      'Daca inca nu ai parcurs restul cursurilor, ar fi indicat sa o faci inainte sa incepi acest curs cuprinde Serializarea, Structuri de date, Generice, Colectii si elemente de Web cum ar fi: Retelistica, Applets.',
    color: 'secondary',
    goTo: 'Advanced'
  },

];


let Img = require('react-image');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.openRegisterForm = this.openRegisterForm.bind(this);
  };
  state = {
    registerDialogOpen: false,
    loginDialogOpen: false,
    showJavaChapter: false,
  };

  openRegisterForm(dialogName) {
    this.setState({ [dialogName]: true });
  }

  callbackFromDialogLogin(open, openRegisterForm){
    this.setState({registerDialogOpen: open, loginDialogOpen: false});
    console.log("called from callbackDialog");
    if(openRegisterForm){
      console.log(this.state.registerDialogOpen);
       this.setState({registerDialogOpen:true});
      console.log(this.state.registerDialogOpen);
    }
  }

  goToChapter(chapter){
    if(chapter = "Ce este Java?"){
      this.setState({
        showJavaChapter: true,
      });
    }
  }

  render() {
    const { classes } = this.props;


    return (
          <Grid container spacing={24} className={classes.footer}>
            <Grid item xs style={{ textAlign: "center" }}>
              <Typography variant="h6" gutterBottom style={{ color: 'white' }}>
                Contacteaza-ne
              </Typography>
              <Typography style={{ color: 'white' }}>Nume: Bogdan Flavia</Typography>
              <Typography style={{ color: 'white' }}>E-mail: flavia.bogdan@gmail.com</Typography>
              <Typography style={{ color: 'white' }}>Acasa: +40 727 437 303</Typography>
              <Typography style={{ color: 'white' }}>Mobil: +40 752 164 052</Typography>
            </Grid>
            <Grid item xs style={{ textAlign: "center" }}>
              <Typography variant="h6" gutterBottom style={{ color: 'white' }}>
                Adresa
              </Typography>
              <Typography style={{ color: 'white' }}>Romania, judet Timis</Typography>
              <Typography style={{ color: 'white' }}>Timisoara, strada Aurel Vlaicu</Typography>
              <Typography style={{ color: 'white' }}>nr 73, corp B</Typography>
              <Typography style={{ color: 'white' }}>etaj 4</Typography>
            </Grid>
            <Grid item xs style={{ textAlign: "center" }}>
              <Typography variant="h6" gutterBottom style={{ color: 'white' }}>
                Legal
              </Typography>
              <Typography style={{ color: 'white' }}>Drepturi de autor</Typography>
              <Typography style={{ color: 'white' }}>&copy; 2018 LearnJava.com</Typography>
              <Typography style={{ color: 'white' }}>Toate drepturile rezervate</Typography>
              <Typography style={{ color: 'white' }}>Termeni si conditii</Typography>
            </Grid>
            <Grid item xs style={{ textAlign: "center" }}>
              <Typography variant="h6" gutterBottom style={{ color: 'white' }}>
                Urmareste-ne
              </Typography>
              {/* <img src={require('./Images/twitter2.png')} style={{width:'50px', height:'50px'}}  /> */}
              <Button target="_blank" href="https://www.facebook.com/">
              <img src={require('./Images/facebook3.png')} style={{ width: '60px', height: '60px' }} />
              </Button>
              <Button target="_blank" href="https://www.instagram.com/?hl=ro">
              <img src={require('./Images/instagram.png')} style={{ width: '60px', height: '60px' }} />
              </Button>
            </Grid>
          </Grid>
  

    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);