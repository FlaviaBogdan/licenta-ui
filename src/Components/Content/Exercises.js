import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ExerciseResultDialog from '../Dialogs/DialogExercisesResult'
import { getExercises } from '../../utils/UserFunctions'
import SvgIcon from '@material-ui/core/SvgIcon';
import Collapse from '@material-ui/core/Collapse';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';


let cardHeight = 400;
const styles = theme => ({
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 5}px 0`,
    },
    card: {
        maxWidth: 400,
        minHeight: 450,
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
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    fab: {
        margin: theme.spacing.unit,
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
    expandOpen: {
        transform: 'rotate(180deg)',
        minHeight: '1000px',
    },
    avatar: {
        backgroundColor: '#C51162',
    },
    formControl: {
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },

});

function Tick(props) {
    return (
        <SvgIcon {...props}>
            <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" />
        </SvgIcon>
    );
}
class Exercises extends React.Component {
    state = {
        expanded: false,
        index: 0,
        listExercises: [],
        easyExercisesSolved: 0,
        mediumExercisesSolved: 0,
        hardExercisesSolved: 0,
        countEasy: 0,
        countMedium: 0,
        countHard: 0,
        countTotal: 0,
        exercisesSolved: 0,
        loading: true,
        listName: this.props.Name,
        exerciseDialog: false,
    };

    openExerciseForm(dialogName) {
        let count = 0;
        let solvedEasy = 0;
        let solvedMedium = 0;
        let solvedHard = 0;
        let totalEasy = 0;
        let totalMedium = 0;
        let totalHard = 0;
        let totalQuestions = 0;
        for (let index = 0; index < this.state.listExercises.length; index++) {
            if (this.state.listExercises[index].difficulty === 1) {
                totalEasy++;
                if (this.state.listExercises[index].answer1.isCorrect === true) {
                    if (this.state.listExercises[index].answer1.description === this.state.listExercises[index].selectedAnswer) {
                        solvedEasy++;
                    }
                }
                if (this.state.listExercises[index].answer2.isCorrect === true) {
                    if (this.state.listExercises[index].answer2.description === this.state.listExercises[index].selectedAnswer)
                        solvedEasy++;
                }
                if (this.state.listExercises[index].answer3.isCorrect === true) {
                    if (this.state.listExercises[index].answer3.description === this.state.listExercises[index].selectedAnswer)
                        solvedEasy++;
                }
                if (this.state.listExercises[index].answer4.isCorrect === true) {
                    if (this.state.listExercises[index].answer4.description === this.state.listExercises[index].selectedAnswer)
                        solvedEasy++;
                }
            }

            if (this.state.listExercises[index].difficulty === 2) {
                totalMedium++;
                if (this.state.listExercises[index].answer1.isCorrect === true) {
                    if (this.state.listExercises[index].answer1.description === this.state.listExercises[index].selectedAnswer) {
                        solvedMedium++;
                    }
                }
                if (this.state.listExercises[index].answer2.isCorrect === true) {
                    if (this.state.listExercises[index].answer2.description === this.state.listExercises[index].selectedAnswer)
                        solvedMedium++;
                }
                if (this.state.listExercises[index].answer3.isCorrect === true) {
                    if (this.state.listExercises[index].answer3.description === this.state.listExercises[index].selectedAnswer)
                        solvedMedium++;
                }
                if (this.state.listExercises[index].answer4.isCorrect === true) {
                    if (this.state.listExercises[index].answer4.description === this.state.listExercises[index].selectedAnswer)
                        solvedMedium++;
                }
            }

            if (this.state.listExercises[index].difficulty === 3) {
                totalHard++;
                if (this.state.listExercises[index].answer1.isCorrect === true) {
                    if (this.state.listExercises[index].answer1.description === this.state.listExercises[index].selectedAnswer) {
                        solvedHard++;
                    }
                }
                if (this.state.listExercises[index].answer2.isCorrect === true) {
                    if (this.state.listExercises[index].answer2.description === this.state.listExercises[index].selectedAnswer)
                        solvedHard++;
                }
                if (this.state.listExercises[index].answer3.isCorrect === true) {
                    if (this.state.listExercises[index].answer3.description === this.state.listExercises[index].selectedAnswer)
                        solvedHard++;
                }
                if (this.state.listExercises[index].answer4.isCorrect === true) {
                    if (this.state.listExercises[index].answer4.description === this.state.listExercises[index].selectedAnswer)
                        solvedHard++;
                }
            }
        }
        count = solvedEasy + solvedHard + solvedMedium;
        console.log("COUNT: ", count);
        totalQuestions = totalEasy + totalMedium + totalHard;
        this.setState({ easyExercisesSolved: solvedEasy });
        this.setState({ mediumExercisesSolved: solvedMedium });
        this.setState({ hardExercisesSolved: solvedHard });
        this.setState({ exercisesSolved: count });
        this.setState({ countEasy: totalEasy });
        this.setState({ countMedium: totalMedium });
        this.setState({ countHard: totalHard });
        this.setState({ countTotal: totalQuestions });
        this.setState({ [dialogName]: true });
    
      }
    
    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
        cardHeight = 900;
    };

    async componentWillMount() {
        const exerciseEasy = await getExercises(1, this.props.Name);
        const exerciseMedium = await getExercises(2,  this.props.Name);
        const exerciseHard = await getExercises(3,  this.props.Name);
        this.setState({ listExercises: [...exerciseEasy, ...exerciseMedium, ...exerciseHard], loading: false });
    }
    callbackFromDialogLogin(open, openRegisterForm){
        this.setState({registerDialogOpen: open, loginDialogOpen: false});
        console.log("called from callbackDialog");
       
      }


    componentDidMount() {
        window.scrollTo(0, 0)

    }


    handleChange = (event, exercise) => {
        console.log("EXERCISE: ", exercise);
        this.setState({ value: event.target.value });
        let index = this.state.listExercises.indexOf(exercise);
        let newList = this.state.listExercises;
        newList[index].selectedAnswer = event.target.value;
        this.setState({ listExercises: newList });
        console.log(event.target.value);
        console.log(this.state.listExercises[index]);
    };


    render() {
        const { classes } = this.props;

        return (
            this.state.loading ? null :
                <React.Fragment>
                    <CssBaseline />
                    <main>
                        <div className={classNames(classes.layout, classes.cardGrid)}>
                            <Grid container spacing={24}>
                                {this.state.listExercises.map((exercise, index) => (
                                    <Grid item key={exercise.key} sm={4} md={4} >
                                        <Card className={classes.card}>
                                            <CardHeader style={{ backgroundColor: '#F0F0F0' }}
                                                avatar={
                                                    <Avatar aria-label="Recipe" className={classes.avatar}>
                                                        {exercise.difficulty}
                                                    </Avatar>
                                                }
                                               
                                                title={"Intrebarea " + index}
                                                subheader={exercise.difficulty === 1 ? 'Dificultate usoara' : exercise.difficulty === 2 ? 'Dificultate medie' : 'Dificultate ridicata'}
                                            />

                                            <CardContent>
                                                <Typography component="p" variant="subtitle1">
                                                    {exercise.question}
                                                </Typography>
                                                <FormControl component="fieldset" className={classes.formControl}>
                                                    <RadioGroup
                                                        aria-label="Answers"
                                                        name="Answers"
                                                        className={classes.group}
                                                        onChange={(e) => this.handleChange(e, exercise)}
                                                    >
                                                        <FormControlLabel value={exercise.answer1.description} control={<Radio />} label={exercise.answer1.description} />
                                                        <FormControlLabel value={exercise.answer2.description} control={<Radio />} label={exercise.answer2.description} />
                                                        <FormControlLabel value={exercise.answer3.description} control={<Radio />} label={exercise.answer3.description} />
                                                        <FormControlLabel value={exercise.answer4.description} control={<Radio />} label={exercise.answer4.description} />
                                                    </RadioGroup>
                                                </FormControl>
                                            </CardContent>
                                            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                                <CardContent >
                                                    <Typography paragraph>
                                                        <i>Rezolvare:</i> {exercise.explanation}
                                                    </Typography>
                                                </CardContent>
                                            </Collapse>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                            <Fab variant="extended" aria-label="Delete" color="primary" className={classes.fab}  onClick={() => this.openExerciseForm("exerciseDialog")}>

                                <Tick style={{ color: 'white' }} className={classes.extendedIcon} />
                                Evaluare
                            </Fab>
                        </div>
                        {this.state.exerciseDialog && <ExerciseResultDialog open={this.state.exerciseDialog} easyExerciseSolved={this.state.easyExercisesSolved} mediumExercisesSolved={this.state.mediumExercisesSolved} hardExercisesSolved={this.state.hardExercisesSolved} exercisesSolved={this.state.exercisesSolved} countEasy={this.state.countEasy}
                        countMedium={this.state.countMedium} countHard={this.state.countHard} countTotal={this.state.countTotal}
                        callback={(open) => {this.setState({exerciseDialog:open})}} onSelectShowAnswers={this.handleExpandClick}/>}
                    </main>

                </React.Fragment>
        );
    }
}

Exercises.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Exercises);