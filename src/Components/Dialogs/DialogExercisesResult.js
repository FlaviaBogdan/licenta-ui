import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import begginerImg from '../Content/Images/begginer.png'
import ExerciseForm from '../Dialogs/ExerciseForm';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({

  layout: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
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
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

});

function DoneIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
    </SvgIcon>
  );
}


class DialogRegister extends React.Component {
  state = {
    open: false,
    listResults: [],
    loading: true,
  };
  constructor(props) {
    console.log('construcotr')
    super(props);
    this.state.open = this.props.open
  }
  async componentWillMount() {
    console.log("SolvedMedium", this.props.mediumExercisesSolved)
    console.log("solv hard", this.props.hardExercisesSolved)
    console.log("solv total", this.props.exercisesSolved)
    console.log("total med", this.props.countMedium)
    console.log("total hard", this.props.countHard)
    console.log("total all", this.props.countTotal)
    let answers = [
      {
        solved: this.props.easyExerciseSolved,
        total: this.props.countEasy,
        difficulty: 'Dificultate usoara',
        image: 'beginer.png',
      },
      {
        solved: this.props.mediumExercisesSolved,
        total: this.props.countMedium,
        difficulty: 'Dificultate medie',
        image: 'medium.png',
      },
      {
        solved: this.props.hardExercisesSolved,
        total: this.props.countHard,
        difficulty: 'Dificultate ridicata',
        image: 'advance.png',
      },
      {
        solved: this.props.exercisesSolved,
        total: this.props.countTotal,
        difficulty: 'Total',
        image: 'total.png',
      },

    ];
    this.setState({ listResults: answers, loading: false });
    console.log(this.state.listResults)
  }


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.callback(false)
  };

  handleCloseAndShowAnswer = () => {
    this.setState({ open: false });
    this.props.callback(false);
    this.props.onSelectShowAnswers() ;
  };


  render() {
    const { classes } = this.props;
    console.log('rendering dialog...', this.state);
    return (
      this.state.loading ? null :
        <div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            maxWidth='md'
            minHeight='900px'
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <React.Fragment>
                <main className={classes.main}>
                  <CssBaseline />
                  <div className={classes.paper}>
                    <Avatar className={classes.avatar} style={{ width: '90px', height: '90px' }}>
                      <DoneIcon style={{ height: '90px', width: '90px', color: 'white' }} />
                    </Avatar>
                    <form className={classes.form} onSubmit={this.onSubmit}>
                      <Grid container spacing={16}>
                        <Grid item xs={12} sm={12}>
                          <Typography component="h1" variant="h4" align="center">
                            Felicitari
                                                    </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <Typography variant="subtitle1" gutterBottom style={{ textAlign: "left" }}>
                            Care este cea mai buna rasplata pentru efortul depus? Cunostiintele acumulate, aici poti vedea rezultatele exercitiilor rezolvate:
                                                    </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <React.Fragment>
                            <Grid container spacing={16}>
                              {this.state.listResults.map(results => (
                                <Grid item key={results.key} sm={3} md={3} >
                                  <Card className={classes.card}>
                                    <img src={require(`../Content/Images/${results.image}`)} style={{ height: '75px', width: '100px', margin: '5px', alignSelf: 'center' }} />
                                    <Typography variant="h6" gutterBottom style={{ textAlign: 'center' }}>
                                      {results.difficulty}
                                    </Typography>
                                    <CardContent>
                                      <Typography component="p" style={{ textAlign: 'center' }}>
                                        Ati raspuns corect la:
                                      </Typography>
                                      <Typography variant="h6" gutterBottom style={{ textAlign: 'center' }}>
                                        {results.solved} din {results.total}
                                      </Typography>
                                    </CardContent>
                                  </Card>
                                </Grid>
                              ))}
                            </Grid>
                          </React.Fragment>
                        </Grid>
                      
                      </Grid>
                    </form>
                  </div>
                </main>
              </React.Fragment>
            </DialogContent>
            <DialogActions>
            <Button onClick={this.handleCloseAndShowAnswer} color="secondary">
              Raspunsuri corecte
            </Button>
            <Button component={Link} to="/statistici/" color="secondary" autoFocus>
              Vizualizeaza statistici
            </Button>
          </DialogActions>
          </Dialog>
        </div>
    );
  }
}
export default withStyles(styles)(DialogRegister)