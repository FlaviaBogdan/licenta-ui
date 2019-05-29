import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import DialogContent from '@material-ui/core/DialogContent';
import MobileStepper from '@material-ui/core/MobileStepper';
import {addStatistic} from '../../utils/UserFunctions'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import withStyles from '@material-ui/core/styles/withStyles';
import jwt_decode from 'jwt-decode'; 
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { getExercises, getEasyQuiz , getMediumQuiz, getHardQuiz} from '../../utils/UserFunctions'
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  success: {
    backgroundColor: green[600],
  },

  rootStepper: {
    maxWidth: 'auto',
    flexGrow: 1,
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  layout: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(700 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
  },

  close: {
    padding: '1px',
  },
  root: {
    flexGrow: 1,
  },

  avatar: {
    backgroundColor: '#C51162',
  },
  margin: {
    '&:focus': {

      backgroundColor: '#8e0038',
    },
  }

});

function Tick(props) {
  return (
      <SvgIcon {...props}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </SvgIcon>
  );
}

class DialogRegister   extends React.Component {
  state = {
    open: false,
    indexQuestion: 0,
    correctQuestions: 0,
    openSnackbarCorrect: false,
    chosedAnswer: 0,
    quizDifficulty : this.props.quizDifficulty,
    chapterName: this.props.chapterName,
    openSnackbarFailed: false,
    completed: false,
    prevActiveStep: 0,
    correctitude: '',
    indexAfisat: 1,
    activeStep: 0,
    listExercises: [],
    loading: true,
    userID: '',
  };
  constructor(props) {
    super(props);
    this.state.open = this.props.open
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  componentDidMount() {
    const token = localStorage.usertoken

    if (token) {
      try {
        const decoded = jwt_decode(token)
  
        this.setState((prevState, props) =>
          ({
            userID: decoded._id,
          }));
      } catch (err) {
        localStorage.removeItem('usertoken');
      }
      console.log("DECODED",this.state.userID) ;
    }
  } 

  handleClose = () => {
    this.setState({ open: false });
    this.props.callback(false)
  };
  handleCloseAndAddStatistic = () => {
    let percentageCalculated = (this.state.correctQuestions * 100 )/this.state.listExercises.length;
    console.log("PERCENTAGE CALCULATED FROM :", percentageCalculated)
    console.log("this.state.correctQuestion", this.state.correctQuestions)
    console.log("this.state.listExercises.length", this.state.listExercises.length)
    addStatistic({
      userId: this.state.userID,
      chapter: this.state.chapterName,
      date: new Date(),
      corectAnswers: this.state.correctQuestions,
      totalQuestions:this.state.listExercises.length,
      percentage: percentageCalculated,
    })
    this.setState({ open: false });
    this.props.callback(false)
  };

  async componentWillMount() {
    if(this.state.quizDifficulty === 'easy'){
      getEasyQuiz( this.state.chapterName).then(response => {
        console.log(response.data, "TESTTT EASYYYYYYYYY")
        this.setState({ listExercises: response, loading: false });
      })
    }
    if(this.state.quizDifficulty === 'medium'){
      getMediumQuiz( this.state.chapterName).then(response => {
        console.log(response.data, "TESTTT MEDIUMMM")
        this.setState({ listExercises: response, loading: false });
      })
    }
    if(this.state.quizDifficulty === 'hard'){
      getHardQuiz( this.state.chapterName).then(response => {
        console.log(response.data, "TESTTT HARDDDD")
        this.setState({ listExercises: response, loading: false });
      })
    }
  }

  handleCloseSnackbarCorrect = () => {
    this.setState({ openSnackbarCorrect: false });
  }
  handleCloseSnackbarFailed = () => {
    this.setState({ openSnackbarFailed: false });
  }

  handleNext = () => {

    if (this.state.indexQuestion < this.state.listExercises.length - 1) {
      if (this.state.chosedAnswer === 1) {
        this.setState({ openSnackbarCorrect: true });
        let currentIndex = this.state.indexQuestion + 1;
        this.setState({ indexQuestion: currentIndex });
        this.setState({ correctQuestions: this.state.correctQuestions + 1 });
        this.setState({ indexAfisat: this.state.indexAfisat + 1 });
      }
      else {
        if (this.state.chosedAnswer === 0) {
          this.setState({ openSnackbarFailed: true });
          let currentIndex = this.state.indexQuestion + 1;
          this.setState({ indexQuestion: currentIndex });
          this.setState({ indexAfisat: this.state.indexAfisat + 1 });
        }
        else {
          let currentIndex = this.state.indexQuestion + 1;
          this.setState({ indexQuestion: currentIndex });
          this.setState({ indexAfisat: this.state.indexAfisat + 1 });
        }
      }
    }
    else {
      console.log("RASPUNS CORECT", this.state.correctQuestions);
      this.setState({ completed: true });
      if(this.state.correctQuestions <= 3){
        this.setState({ correctitude: 'bad'});
      }
      else{
        if(this.state.correctQuestions <= 6){
          this.setState({ correctitude: 'good'});
        }
        else{
          if(this.state.correctQuestions > 6){
           this.setState({ correctitude: 'excelent'});}

        }
      }
    }
  };

  handleNext2(answer) {
    if (this.state.indexQuestion < this.state.listExercises.length - 1) {
      if (answer === true) {
        this.setState({ chosedAnswer: 1 })
      }
      else {
        if (answer === false) {
          this.setState({ chosedAnswer: 0 })
        }
        else {
          this.setState({ chosedAnswer: 2 })
        }
      }
      console.log('construcotr', this.props.difficultyQuiz)
    }
  }


  render() {
    console.log('rendering dialog...', this.state);
    const {classes} = this.props;
    return (
             this.state.loading ? null :
        <div>
         
            {this.state.completed === false && (
               <Dialog
               open={this.state.open}
               onClose={this.handleClose}
               maxWidth='md'
               minHeight='900px'
               aria-labelledby="alert-dialog-title"
               aria-describedby="alert-dialog-description"
             >
              <div>
                <div style={{ background: '#F0F0F0' }}>
                  <Typography variant="h5" gutterbuttom style={{ textAlign: 'center', color: 'black', padding: '20px' }}>
                    Intrebarea {this.state.indexAfisat}
                  </Typography>
                </div>
                <DialogContent>
                {this.state.loading ? null :
                  <React.Fragment>
                    <main className={classes.main}>
                      <CssBaseline />
                      <div className={classes.paper}>
                        <div className={classes.root}>

                          <Grid container spacing={24}>
                            <Grid item xs={12} style={{ alignItems: 'center' }}>

                              <Typography variant="h6" gutterbuttom style={{ textAlign: 'left' }}>
                              
                                {this.state.listExercises[this.state.indexQuestion].question}
                              </Typography>
                              <Divider style={{ marginTop: '20px' }} />
                            </Grid>
                            <Grid item xs={6}>
                              <Button variant="contained" color="secondary" uppercase={false} style = {{ textTransform: 'none'}} onClick={() => this.handleNext2(this.state.listExercises[this.state.indexQuestion].answer1.isCorrect)} style={{ width: '425px', height: '100px' }} className={classes.margin} >
                                {this.state.listExercises[this.state.indexQuestion].answer1.description}
                              </Button>
                            </Grid>
                            <Grid item xs={6}>
                              <Button variant="contained" color="secondary" uppercase={false}  style = {{ textTransform: 'none'}} onClick={() => this.handleNext2(this.state.listExercises[this.state.indexQuestion].answer2.isCorrect)} style={{ width: '425px', height: '100px' }} className={classes.margin} >
                                {this.state.listExercises[this.state.indexQuestion].answer2.description}
                              </Button>
                            </Grid>
                            <Grid item xs={6}>
                              <Button variant="contained" color="secondary" uppercase={false} style = {{ textTransform: 'none'}} onClick={() => this.handleNext2(this.state.listExercises[this.state.indexQuestion].answer3.isCorrect)} style={{ width: '425px', height: '100px' }} className={classes.margin} >
                                {this.state.listExercises[this.state.indexQuestion].answer3.description}
                              </Button>
                            </Grid>
                            <Grid item xs={6}>
                              <Button variant="contained" color="secondary" uppercase={false}  style = {{ textTransform: 'none'}} onClick={() => this.handleNext2(this.state.listExercises[this.state.indexQuestion].answer4.isCorrect)} style={{ width: '425px', height: '100px' }} className={classes.margin} >
                                {this.state.listExercises[this.state.indexQuestion].answer4.description}
                              </Button>
                            </Grid>
                            <Grid item xs={12}>
                
                            <Typography variant="subtitle2" gutterBottom style={{ textAlign: 'left' }}>
                              *Alege una dintre variantele de mai sus si apasa pe butonul "Urmatoarea intrebare".
                            </Typography>
                            </Grid>
                          </Grid>
                          <Divider style={{ marginTop: '15px' }} />
                      
                          <Grid item xs={12} style={{ marginTop: '15px' }}>
                            <Typography variant="h6" gutterBottom style={{ textAlign: 'center' }}>
                              Progresul actual: {this.state.indexAfisat}/{this.state.listExercises.length}
                            </Typography>
                          </Grid>
                        </div>
                      </div>
                    </main>
                  </React.Fragment>
                  }
                </DialogContent>
                <DialogActions style={{ margin: '10px' }}>
                  <Button onClick={this.handleNext} color="secondary">
                    {this.state.completed === false ? 'Urmatoarea' : 'Vezi rezultate'}
                  </Button>
                  <Button onClick={this.handleClose} color="secondary" autoFocus>
                    Close
            </Button>
                </DialogActions>
              
              </div>
              </Dialog>
            )}

            {this.state.completed === true && (
                <Dialog
                open={this.state.open}
                maxWidth='sm'
                minHeight='900px'
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
              <div>
                <DialogContent>
                  <React.Fragment>
                    <main className={classes.main}>
                      <CssBaseline />
                      <div className={classes.paper}>
                        <div className={classes.root}>

                          <Grid container spacing={24}>
                            <Grid item xs={12}>
                              <div>
                                <img src={require('./congratulations.png')} style={{ width: '500px', height: '200px', marginTop: '25px' }} />
                              </div>
                            </Grid>
                            {this.state.correctitude === 'bad' && (
                              <div>
                            <Grid item xs={12} style={{margin:'15px'}}>
                              <Typography variant="h5" style={{textAlign:'center'}}>
                                Felicitari pentru terminarea capitolului
                              </Typography>
                              <Typography variant="h6" style={{textAlign:'center'}}>
                                 {this.state.chapterName}
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography variant="subtitle2" paragraph>
                                Poate ai avut o zii proasta sau nu ai fost suficient de atent deoarece rezultatele tale nu au fost cele mai bune, dar cu putin antrenament si cu mai multa atentie ai putea reusi sa le inmunatatesti.
                      </Typography>
                              <Typography variant="subtitle2" paragraph>
                                Ai raspuns corect la <b>{this.state.correctQuestions}</b> din <b>{this.state.listExercises.length}</b> intrebari.
                      </Typography>
                              <Typography variant="subtitle2" paragraph>
                                Te sustinem in continuare si te sfatuim sa studiezi mai atent acest capitol.
                      </Typography>
                            </Grid>
                            </div>
                            )}
                               {this.state.correctitude === 'good' && (
                              <div>
                              <Grid item xs={12} style={{margin:'15px'}}>
                              <Typography variant="h5" style={{textAlign:'center'}}>
                                Felicitari pentru terminarea capitolului 
                              </Typography>
                              <Typography variant="h6" style={{textAlign:'center'}}>
                                 {this.state.chapterName}
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography variant="subtitle2" paragraph>
                               Rezultatele tale au fost bune, dar oricand exista loc pentru a acumula mai multe cunostinte si a intelege mai bine notiunile de Java. 
                      </Typography>
                              <Typography variant="subtitle2" paragraph>
                                Ai raspuns corect la <b>{this.state.correctQuestions}</b> din <b>{this.state.listExercises.length}</b> intrebari.
                      </Typography>
                              <Typography variant="subtitle2" paragraph>
                                Felicitari pentru rezultatele obtinute!
                      </Typography>
                            </Grid>
                            </div>
                            )}
                             {this.state.correctitude === 'excelent' && (
                              <div>
                             <Grid item xs={12} style={{margin:'15px'}}>
                              <Typography variant="h5" style={{textAlign:'center'}}>
                                Felicitari pentru terminarea capitolului 
                              </Typography>
                              <Typography variant="h6" style={{textAlign:'center'}}>
                                 {this.state.chapterName}
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography variant="subtitle2" paragraph>
                               Rezultatele tale au fost foarte bune. Datorita muncii depuse de tine, acum stapanesti foarte bine aceste notiuni. Te felicitam pentru munca depusa si pentru rezultatele foarte bune.
                      </Typography>
                              <Typography variant="subtitle2" paragraph>
                                Ai raspuns corect la <b>{this.state.correctQuestions}</b> din <b>{this.state.listExercises.length}</b> intrebari.
                      </Typography>
                              <Typography variant="subtitle2" paragraph>
                                Acum esti pregatit pentru urmatorul capitol. 
                      </Typography>
                            </Grid>
                            </div>
                            )}
                          </Grid>
                        </div>
                      </div>
                    </main>
                  </React.Fragment>
                </DialogContent>
                <DialogActions style={{ margin: '10px' }}>
                  <Button onClick={this.handleCloseAndAddStatistic} color="secondary" autoFocus>
                    Close
                  </Button>
                </DialogActions>
              </div>
              </Dialog>
            )}

            <Snackbar style={{ marginTop: '20px' }}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={this.state.openSnackbarCorrect}
              autoHideDuration={2000}
              onClose={this.handleCloseSnackbarCorrect}
            >
              <SnackbarContent
                className={classes.success}
                aria-describedby="client-snackbar"
                message={
                  <span className={classes.message}>
                    <CheckCircleIcon className={classes.icon} />
                    Felicitari, ai raspuns corect!
                  </span>
                }
                action={[
                  <IconButton key="close" aria-label="Close" color="inherit" onClick={this.handleCloseSnackbarCorrect}>
                    <CloseIcon className={classes.icon} />
                  </IconButton>,
                ]}
              />
            </Snackbar>

            <Snackbar style={{ marginTop: '20px' }}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={this.state.openSnackbarFailed}
              autoHideDuration={2000}
              onClose={this.handleCloseSnackbarFailed}
            >
              <SnackbarContent
                className={classes.error}
                aria-describedby="client-snackbar"
                message={
                  <span className={classes.message}>
                    <CheckCircleIcon className={classes.icon} />
                    Din pacate raspunsul este gresit
                  </span>
                }
                action={[
                  <IconButton key="close" aria-label="Close" color="inherit" onClick={this.handleCloseSnackbarFailed}>
                    <ErrorIcon className={classes.icon} />
                  </IconButton>,
                ]}
              />
            </Snackbar>
        
        </div>
    );
  }
}
export default withStyles(styles)(DialogRegister)
