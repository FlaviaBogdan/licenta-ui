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
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import DialogLogin from '../Authentification/DialogLogin';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
    root: {
        flexGrow: 1,

    },
    center: {
        margin: 'auto',
        width: '60%',

        padding: '10px',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    card: {
        minWidth: 500,
        minHeight: 500,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
});


function PhotoIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
        </SvgIcon>
    );
}

class LockedContent extends React.Component {
    constructor(props) {
        super(props);
    };
    state = {
        loginDialogOpen: false,
      };
      componentDidMount() {
          window.scrollTo(0, 0)
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

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container direction="column" style={{ marginTop: '20px' }} >
                    <Grid className={classes.center} item xs={12} sm={12} />
                    <Grid className={classes.center} item xs={12} sm={12}>
                        <Grid container direction="row">
                            <Grid item xs />
                            <Grid item xs>
                                <Card className={classes.card}>
                                    <CardHeader style={{textAlign:'center'}}                
                                        title="Continutul nu poate fi vizualizat"                   
                                    />
                                    <CardMedia> 
                                        <Grid container direction="row">
                                            <Grid item xs />
                                            <Grid item xs>
                                                <IconButton style={{ height: '200px', width: '200px', color: 'white', backgroundColor: '#C51162' }}>
                                                    <PhotoIcon style={{ height: '100px', width: '100px' }} />
                                                </IconButton>
                                            </Grid>
                                            <Grid item xs />
                                        </Grid>
                                    </CardMedia>
                                    <CardContent>
                                        <Grid item xs={12} sm={12}>
                                        <Grid className={classes.center} item xs={12} sm={12} style={{textAlign:'center'}}>
                                            <Typography variant="h5" gutterBottom paragraph>
                                                Blocat
                                            </Typography>
                                            <Typography variant="h6" gutterBottom paragraph>
                                                Pentru a-l debloca, autentificati-va.
                                            </Typography>
                                            <Button variant="contained" color="secondary" size="large" onClick={() => this.openRegisterForm("loginDialogOpen")} className={classes.margin}>
                                                Autentifica-te
                                                <img src={require('../Layouts/Images/arrowIcon2.png')} className={classes.rightIcon} />
                                            </Button>
                                            {this.state.loginDialogOpen && <DialogLogin open={this.state.loginDialogOpen} callback={(open,openRegistrationForm) => this.callbackFromDialogLogin(open,openRegistrationForm)} />}
                                        </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs />
                        </Grid>
                    </Grid>

                </Grid>
            </div >

        )
    }
}

LockedContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LockedContent);