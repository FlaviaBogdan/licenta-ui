import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EnivronmentSetup from '../Content/EnvironmentSetup';
import WhatIsJava from '../Content/WhatIsJava';
import EnvironmentSetupVideo from '../Content/EnvironmentSetupVideo'
import BasicSyntax from '../Content/BasicSyntax';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  spacing: {
    padding: "35px",
  },
});



class DrawerChapter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });

    
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    console.log(this.props);
    return (
      <div>
        <Paper className={classes.root}>
        {this.props.chapter == "Ce este Java?" && (
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="primary"
            variant="fullWidth"
            centered
          >
            <Tab label="Tutorial" />
            <Tab label="Exercitii" disabled/>
            <Tab label="Tutoriale Video" disabled />
          </Tabs>
        )}
        {this.props.chapter == "Instalare" && (
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="primary"
            variant="fullWidth"
            centered
          >
            <Tab label="Tutorial" />
            <Tab label="Exercitii" disabled/>
            <Tab label="Tutoriale Video" disabled />
          </Tabs>
        )}
        {this.props.chapter != "Ce este Java?" && this.props.chapter != "Instalare" && (
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="primary"
            variant="fullWidth"
            centered
          >
            <Tab label="Tutorial" />
            <Tab label="Exercitii" />
            <Tab label="Tutoriale Video" />
          </Tabs>
        )}
        </Paper>
        <Paper className={classes.spacing} variant="fullHeight">
          {this.props.chapter == "Instalare" &&  value === 0 && (
      
            <EnivronmentSetup />
        
          )}
          {this.props.chapter == "Ce este Java?" &&  value === 0 && (
            <WhatIsJava />
          )}
           
          {this.props.chapter == "Sintaxa de baza" &&  value === 0 && (
            <BasicSyntax />
          )}
          {this.props.chapter == "Sintaxa de baza" &&  value === 2 && (
            <EnvironmentSetupVideo />
          )}

        </Paper>
      </div>
    );
  }
}

DrawerChapter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerChapter);