import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Footer  from '../Layouts/Footer';
import ListSubheader from '@material-ui/core/ListSubheader';
import CustomList from './Lists/List'
import FooterBlack from '../Layouts/FoooterBlack'
const drawerWidth = 250;

const dataChapters = require('../BodyContent/Lists/Content/ListContent.json');
const dataChaptersPOO = require('../BodyContent/Lists/Content/POOInJava.json');
const advanceJava = require('../BodyContent/Lists/Content/AdvanceJava.json');

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },

  drawerPaper: {
    width: drawerWidth,
  },

  content: {
    flexGrow: 1,
  },

  toolbar: theme.mixins.toolbar,
});

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSubchapter: "Ce este Java?",

    };
    this.selectedSubchapter = this.selectedSubchapter.bind(this);
   
  }


  selectedSubchapter(selectedSubchapter) {
    this.setState({ selectedSubchapter });
  }
  handleChange = (event, value) => {
    this.setState({ value });    
  };

  render() {
    const { classes } = this.props;
    console.log("TEST22",this.props.test);

    return (
        <React.Fragment>
        <CssBaseline />    
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List >
            <ListSubheader>Tutoriale Java</ListSubheader>
            {dataChapters.chapters.map(chapter => {
              return <CustomList chapter={chapter} onSelectNewSubchapter={this.selectedSubchapter} />
            })}
          </List>
          <List >
            <ListSubheader>POO in Java</ListSubheader>
            {dataChaptersPOO.chapters.map(chapter => {
              return <CustomList chapter={chapter} onSelectNewSubchapter={this.selectedSubchapter} />
            })}
          </List>
          <List >
            <ListSubheader>Tutoriale Java Avansate</ListSubheader>
            {advanceJava.chapters.map(chapter => {
              return <CustomList chapter={chapter} onSelectNewSubchapter={this.selectedSubchapter} />
            })}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Footer chapter={this.state.selectedSubchapter} />
        </main>
  
        </React.Fragment>
    )
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Menu);