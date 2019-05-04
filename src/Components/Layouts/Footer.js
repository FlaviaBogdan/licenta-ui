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
import Inheritance from '../Content/Inheritance'
import DataStructure from '../Content/DataStructures'
import FooterBlack from './FoooterBlack'

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

  state={
    videoContent: null,
  }
  handleChange = (event, value) => {
    this.setState({ value });


  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    console.log(this.props.chapter);
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
              <Tab label="Exercitii" disabled />
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
              <Tab label="Exercitii" disabled />
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
          {this.props.chapter == "Instalare" && value === 0 && (

            <EnivronmentSetup />

          )}
          {this.props.chapter == "Ce este Java?" && value === 0 && (
            <WhatIsJava />
          )}

          {this.props.chapter == "Mostenire" && value === 0 && (
            <Inheritance />
          )}
           {this.props.chapter == "Mostenire" && value === 2 && (
           <EnvironmentSetupVideo videoContent={this.props.chapter} />
          )}
           {this.props.chapter == "Structuri de date" && value === 0 && (
           <DataStructure />
          )}
             {this.props.chapter == "Structuri de date" && value === 2 && (
             <EnvironmentSetupVideo videoContent={this.props.chapter} />
          )}

          {this.props.chapter == "Sintaxa de baza" && value === 0 && (
            <BasicSyntax />
          )}
          {this.props.chapter == "Sintaxa de baza" && value === 2 && (
            <EnvironmentSetupVideo videoContent={this.props.chapter} />
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