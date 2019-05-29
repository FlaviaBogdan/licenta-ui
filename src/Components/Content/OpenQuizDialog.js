import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import ValidateEmotions from '../Dialogs/DialogEmotionValidation';
import Fab from '@material-ui/core/Fab';
import Quiz from '../Dialogs/Quiz'



const styles = theme => ({

    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    fab: {
        margin: theme.spacing.unit,
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
    right: {
        position: 'absolute',
        right: '0px',
        padding: '10px',
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 5,
    }

});

function Tick(props) {
    return (
        <SvgIcon {...props}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </SvgIcon>
    );
}


class BasycSyntax extends React.Component {
    constructor(props) {
        super(props);
        this.quizDifficultyFound = this.quizDifficultyFound.bind(this);

    }
    state = {
        quizDialogOpen: false,
        loginDialogOpen: false,
        chapterName: this.props.Name,
        registerDialogOpen: false,
        difficultyQuiz: '',
    }
    

    openRegisterForm(dialogName) {
        this.setState({ [dialogName]: true });
      }
    
    callbackFromDialogLogin(open, openRegisterForm){
        this.setState({registerDialogOpen: open, loginDialogOpen: false});
        if(openRegisterForm){
           this.setState({registerDialogOpen:true});
        }
      }

      quizDifficultyFound(difficulty) {
        console.log("GASIT IN OPQNQUIZDIALOG",difficulty)
       this.setState({ difficultyQuiz : difficulty});

      }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Fab variant="extended" aria-label="Delete" color="primary" className={classes.fab} onClick={() => this.openRegisterForm("loginDialogOpen")}>
                    <Tick style={{ color: 'white' }} className={classes.extendedIcon} />
                    TEST
                </Fab>
                {this.state.registerDialogOpen && <Quiz open={this.state.registerDialogOpen} chapterName={this.state.chapterName} quizDifficulty = {this.state.difficultyQuiz} callback={(open) => {this.setState({registerDialogOpen:open})}} />}
                {this.state.loginDialogOpen && <ValidateEmotions chapterName={this.state.chapterName} open={this.state.loginDialogOpen} callback={(open,openRegistrationForm) => this.callbackFromDialogLogin(open,openRegistrationForm)}  onDifficultyFound={this.quizDifficultyFound} />} 
            </React.Fragment>
        )
    }
}

BasycSyntax.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasycSyntax);