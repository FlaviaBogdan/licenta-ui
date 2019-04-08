import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import LearningMenu from './Menu'
import HomePage from '../Layouts/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DialogLogin from '../Dialogs/DialogLogin'
import DialogRegister from '../Dialogs/DialogRegister'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    fontFamily: 'Nunito,Helvetica Neue,Helvetica,Arial,sans-serif ',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class ClippedDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSubchapter: "Ce este Java?",
      homeComponent: true,
      learningComponent: false,
      loginDialogOpen: false,
      registerDialogOpen: false,
    };
    this.onHomeClick = this.onHomeClick.bind(this);
    this.onLearningClick = this.onLearningClick.bind(this);
    this.selectedSubchapter = this.selectedSubchapter.bind(this);

  }
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

  onHomeClick() {
    this.setState({
      homeComponent: true,
      learningComponent: false,
    });
  }
  onLearningClick() {
    this.setState({
      learningComponent: true,
      homeComponent: false,
    });
  }

  selectedSubchapter(selectedSubchapter) {
    this.setState({ selectedSubchapter });
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar className={classes.appBar}>
          <Toolbar>
          <img src={require('../Content/Icons/JavaIcon.png')} style={{width:"50px",height:"50px"}} />
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Learn Java
            </Typography>
            <div className={classes.grow} />
            
            <Button color="inherit" component={Link} to="/">Acasa</Button>
            <Button color="inherit" component={Link} to="/invata/">Invata</Button>
            <Button color="secondary" onClick={() => this.openRegisterForm("loginDialogOpen")}>Autentificare</Button>
            {this.state.registerDialogOpen && <DialogRegister open={this.state.registerDialogOpen} callback={(open) => {this.setState({registerDialogOpen:open})}} />}
            {this.state.loginDialogOpen && <DialogLogin open={this.state.loginDialogOpen} callback={(open,openRegistrationForm) => this.callbackFromDialogLogin(open,openRegistrationForm)} />}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
        <Switch>
    
    <Route exact path='/'  component={HomePage} />
    <Route path='/invata/' component={LearningMenu} />

</Switch> 
      </div>
      
      </Router>
    )
  }
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ClippedDrawer);