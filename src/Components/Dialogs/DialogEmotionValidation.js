import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Webcam from "react-webcam";
import Radio from '@material-ui/core/Radio';
import jwt_decode from 'jwt-decode'; 
import RadioGroup from '@material-ui/core/RadioGroup';
import SvgIcon from '@material-ui/core/SvgIcon';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { getEmotions } from '../../utils/UserFunctions'
import DialogContent from '@material-ui/core/DialogContent';
import LoginForm from '../Authentification/LoginForm';
import Button from '@material-ui/core/Button';
import { DialogActions } from '@material-ui/core';

const styles = theme => ({
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
});

let questions = [
    {
        questionDescription: "Care dintre urmatoarele starii de spirit, te caracterizeaza cel mai bine in acest moment?",
        answer1: {
            description: "Fericit",
            value: '1'
        },
        answer2: {
            description: "Suparat",
            value: '2'
        },
        answer3: {
            description: "Indiferent",
            value: '3'
        },
    },
    {
        questionDescription: "Cum ai evalua cursul finalizat anterior?",
        answer1: {
            description: "Usor",
            value: '1'
        },
        answer2: {
            description: "Mediu",
            value: '2'
        },
        answer3: {
            description: "Dificil",
            value: '3'
        },
    },
    {
        questionDescription: "Care dintre starile de mai jos le asociezi cu testul ce urmeaza?",
        answer1: {
            description: "Multumire",
            value: "1"
        },
        answer2: {
            description: "Neliniste",
            value: "2"
        },
        answer3: {
            description: "Frica",
            value: '3'
        },
    },
    {
        questionDescription: "Gandul la testul ce urmeaza te face sa te simti nepregatit?",
        answer1: {
            description: "Nu",
            value: '1'
        },
        answer2: {
            description: "Intre",
            value: '2'
        },
        answer3: {
            description: "Da",
            value: '3'
        },
    },
    {
        questionDescription: "Care este dificultatea cea mai potrivita pe care o asociezi exercitiilor efectuate de tine?",
        answer1: {
            description: "Usor",
            value: '1'
        },
        answer2: {
            description: "Mediu",
            value: '2'
        },
        answer3: {
            description: "Dificil",
            value: '3'
        },
    }
]

class DialogLogin extends React.Component {
    state = {
        open: false,
        questionsAnswers: [],
        questionaireCompleted: false,
        questionsDifficulty: '',
        username: '',
    };

    constructor(props) {
        super(props);
        this.state.open = this.props.open
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
        this.props.callback(false);
    };
    componentDidMount() {
        const token = localStorage.usertoken
        if (token) {
          try {
            const decoded = jwt_decode(token)
            this.setState((prevState, props) =>
              ({
                username: decoded.firstName
              }));
          } catch (err) {
            localStorage.removeItem('usertoken');
          }
    
        }
      } 

    setRef = webcam => {
        this.webcam = webcam;
    };

    handleChange = (event, question) => {
        this.setState({ value: event.target.value });
        let index = questions.indexOf(question);
        let newList = questions;
        newList[index].selectedAnswer = event.target.value;
        questions = newList;
    };

    emotionalStateCalculation = async () => {
        let difficultyFromAPIEmotion = 'none';
        let difficultyFromForm = 'none';
        const screenshot = this.webcam.getScreenshot();
        if (screenshot != undefined) {
            let a = screenshot.indexOf(",");
            const picture2 = screenshot.substring(a + 1);
            await getEmotions(picture2).then(res => {
                if (res != undefined) {
                    if (res.anger > 0.5) {
                        console.log("ANGEER", res.anger);
                        difficultyFromAPIEmotion = 'easy';
                    }
                    if (res.fear > 0.5) {
                        console.log("fear", res.fear);
                        difficultyFromAPIEmotion = 'easy';
                    }
                    if (res.sadness > 0.5) {
                        console.log("sadness", res.sadness);
                        difficultyFromAPIEmotion = 'easy';
                    }
                    if (res.contempt > 0.5) {
                        console.log("contempt", res.contempt);
                        difficultyFromAPIEmotion = 'medium';
                    }
                    if (res.disgust > 0.5) {
                        console.log("disgust", res.disgust);
                        difficultyFromAPIEmotion = 'medium';
                    }
                    if (res.neutral > 0.5) {
                        console.log("neutral", res.neutral);
                        difficultyFromAPIEmotion = 'medium';
                    }
                    if (res.happiness > 0.5) {
                        console.log("happiness", res.happiness);
                        difficultyFromAPIEmotion = 'hard';
                    }
                    if (res.surprise > 0.5) {
                        console.log("surprise", res.surprise);
                        difficultyFromAPIEmotion = 'hard';
                    }
                }
            })
        }
        let countEasy = 0;
        let countMedium = 0;
        let countHard = 0;
        for (let index = 0; index < questions.length; index++) {
            if (questions[index].selectedAnswer === "1") {
                countHard++;
            }
            if (questions[index].selectedAnswer === "2") {
                countMedium++;
            }
            if (questions[index].selectedAnswer === "3") {
                countEasy++;
            }
        }
        var max = Math.max(countEasy, countMedium, countHard);
        console.log("maximum: ", max);
        if (max != 0) {
            if (max === countEasy) {
                difficultyFromForm = 'easy';
            }
            if (max === countMedium) {
                difficultyFromForm = 'medium';
            }
            if (max === countHard) {
                difficultyFromForm = 'hard';
            }
        }
        else {
            difficultyFromForm = 'none';
        }

        console.log("difficultyFromForm: ", difficultyFromForm);
        console.log("difficultyFromAPIEmotion: ", difficultyFromAPIEmotion);
        if (difficultyFromForm != 'none' && difficultyFromAPIEmotion != 'none') {
            if (difficultyFromForm === difficultyFromAPIEmotion) {
                this.setState({ questionsDifficulty: difficultyFromForm })
            }
        }
        if (difficultyFromForm === 'none') {
            if (difficultyFromAPIEmotion != 'none') {
                this.setState({ questionsDifficulty: difficultyFromAPIEmotion })
            }
        }
        if (difficultyFromAPIEmotion === 'none') {
            if (difficultyFromForm != 'none') {
                this.setState({ questionsDifficulty: difficultyFromForm })
            }
        }
        if (difficultyFromForm != 'none' && difficultyFromAPIEmotion != 'none') {
            if (difficultyFromForm === 'easy' && difficultyFromAPIEmotion === 'medium') {
                this.setState({ questionsDifficulty: 'easy' })
            }
            if (difficultyFromForm === 'easy' && difficultyFromAPIEmotion === 'hard') {
                this.setState({ questionsDifficulty: 'medium' })
            }
            if (difficultyFromForm === 'medium' && difficultyFromAPIEmotion === 'easy') {
                this.setState({ questionsDifficulty: 'medium' })
            }
            if (difficultyFromForm === 'medium' && difficultyFromAPIEmotion === 'hard') {
                this.setState({ questionsDifficulty: 'hard' })
            }
            if (difficultyFromForm === 'hard' && difficultyFromAPIEmotion === 'easy') {
                this.setState({ questionsDifficulty: 'medium' })
            }
            if (difficultyFromForm === 'hard' && difficultyFromAPIEmotion === 'medium') {
                this.setState({ questionsDifficulty: 'medium' })
            }
        }
        if (difficultyFromForm === 'none' && difficultyFromAPIEmotion === 'none') {
            this.setState({ questionsDifficulty: 'easy' })
        }
        this.setState({ questionaireCompleted: true })
    }



    render() {
        const { classes } = this.props;
        const videoConstraints = {
            width: 300,
            height: 300,
            facingMode: "user"
        };
        console.log('rendering dialog...', this.state);
        return (
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    maxWidth='md'
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <div style={{ display: 'none' }}>
                        <Webcam
                            audio={false}
                            height={200}
                            ref={this.setRef}
                            minScreenshotWidth={720}
                            minScreenshotHeight={720}
                            screenshotFormat='image/jpeg'
                            width={200}
                            videoConstraints={videoConstraints}
                        />
                    </div>
                    <DialogContent>
                        <main className={classes.main}>
                            <CssBaseline />
                            <div className={classes.paper}>
                                <div className={classes.root}>

                                    <Grid container spacing={24}>
                                        <Grid item xs={12}>
                                            <center>
                                                <img src={require('./takeQuiz.png')} style={{ width: '300px', height: '250px', marginTop: '25px' }} />
                                            </center>
                                        </Grid>

                                        <Grid item xs={12} style={{ margin: '15px' }}>
                                            <Typography variant="h5" style={{ textAlign: 'center' }}>
                                                Buna, {this.state.username}!
                                                    </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1" paragraph>
                                                Iti multumim ca ai ales sa explorezi capitolul: "{this.props.chapterName}" alaturi de noi. Inainte de a participa la testul corespunzator acestui capitol, te rugam sa raspunzi la urmatoarele intebari:
                                                    </Typography>

                                        </Grid>
                                        {questions.map((question, index) => (

                                            <Grid item xs={6}>
                                                <Typography variant="subtitle2" paragraph>
                                                    {index + 1}. {question.questionDescription}
                                                </Typography>
                                                <Typography variant="subtitle2" paragraph>
                                                    <FormControl component="fieldset" className={classes.formControl}>
                                                        <RadioGroup
                                                            aria-label="Answers"
                                                            name="Answers"
                                                            className={classes.group}
                                                            onChange={(e) => this.handleChange(e, question)}
                                                        >
                                                            <FormControlLabel value={question.answer1.value} control={<Radio />} label={question.answer1.description} />
                                                            <FormControlLabel value={question.answer2.value} control={<Radio />} label={question.answer2.description} />
                                                            <FormControlLabel value={question.answer3.value} control={<Radio />} label={question.answer3.description} />
                                                        </RadioGroup>
                                                    </FormControl>
                                                </Typography>
                                            </Grid>

                                        ))}
                                    </Grid>
                                </div>
                            </div>
                        </main>

                    </DialogContent>
                    <DialogActions>
                        {this.state.questionaireCompleted && (
                            <Button style={{ textTransform: 'none', textAlign: "center" }} color="secondary" onClose={this.handleClose} onClick={() => { this.setState({ open: false }); this.props.onDifficultyFound(this.state.questionsDifficulty); this.props.callback(false, true) }}>Incepe testul</Button>
                        )}
                        {!this.state.questionaireCompleted && (
                            <Button style={{ textTransform: 'none', textAlign: "center" }} color="secondary" onClick={() => { this.emotionalStateCalculation() }}>Preda formularul</Button>
                        )}
                        <Button style={{ textTransform: 'none', textAlign: "center" }} color="secondary" onClick={this.handleClose}>Renunta</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(DialogLogin);