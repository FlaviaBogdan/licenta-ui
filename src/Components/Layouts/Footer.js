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
import Exercises from '../Content/Exercises'
import LockedContent from '../Content/LockedContent';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  spacing: {
    padding: "35px",
    marginBottom: '35px',
    height: 650,
    width: '100%'
  },
});

let chapterList = ["Obiecte si Clase", "Constructori", "Date, variabile si modificatori"
  , "Tipuri de date", "Tipuri de variabile", "Tipuri de modificatori", "Operatori",
  "Controlul buclei - FOR", "FOR si IF", "Tipuri de date - Detaliat", "Web", "Instructiunea IF",
  , "Numere", "Caractere", "Siruri de caractere", "Siruri", "Timp si data", "Expresii regulate",
  "Metode", "Fisiere si I/O", "Exceptii", "Clase interioare",   "Colectii", "Generice", "Serializare",
  "Retelistica", "Trimiterea e-mailurilor", "Fire de executie multiple", "Applets"
  , "Suprascriere", "Polimorfism", "Abstractizare", "Incapsulare", "Interfete",
  "Pachete"]


class DrawerChapter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  state = {
    videoContent: null,
  }
  handleChange = (event, value) => {
    this.setState({ value });


  };

  componentDidMount() {
    window.scrollTo(0, 0)
  }

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
          {this.props.chapter == "Despre Java" && (
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
          {this.props.chapter != "Ce este Java?" && this.props.chapter != "Instalare" && this.props.chapter !== "Despre Java" && (
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
        <div className={classes.spacing} variant="full">
          {this.props.chapter == "Instalare" && value === 0 && (

            <EnivronmentSetup />

          )}
          {(this.props.chapter == "Sintaxa de baza" || this.props.chapter == "Sintaxa") && value === 1   && (
            <Exercises Name="Sintaxa de baza" />
          )}
               {(this.props.chapter == "Mostenire" || this.props.chapter == "Principalele principii") && value === 1   && (
            <Exercises Name="Mostenire" />
          )}
               {this.props.chapter == "Structuri de date"  && value === 1   && (
            <Exercises Name="Structuri de date"/>
          )}
          {this.props.chapter == "Ce este Java?" && value === 0 && (
            <WhatIsJava />
          )}
          {this.props.chapter == "Despre Java" && (
            <WhatIsJava />
          )}

          {this.props.chapter == "Mostenire" && value === 0 && (
            <Inheritance />
          )}
          {this.props.chapter == "Principalele principii" && value === 0 && (
            <Inheritance />
          )}
          {this.props.chapter == "Principalele principii" && value === 2 && (
            <EnvironmentSetupVideo videoContent="Mostenire" />
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
          {this.props.chapter == "Sintaxa" && value === 0 && (
            <BasicSyntax />
          )}
          {this.props.chapter == "Sintaxa" && value === 2 && (
            <EnvironmentSetupVideo videoContent="Sintaxa de baza" />
          )}

          {this.props.chapter == "Sintaxa de baza" && value === 2 && (
            <EnvironmentSetupVideo videoContent={this.props.chapter} />
          )}
          {!localStorage.usertoken && chapterList.includes(this.props.chapter) && (
            <LockedContent />
          )}
          {localStorage.usertoken && chapterList.includes(this.props.chapter) && value === 0 && (
            <BasicSyntax />
          )}
          {localStorage.usertoken && chapterList.includes(this.props.chapter) && value === 1 && (
             <Exercises Name="Sintaxa de baza" />
          )}
          {localStorage.usertoken && chapterList.includes(this.props.chapter) && value === 2 && (
            <EnvironmentSetupVideo videoContent={this.props.chapter} />
          )}

        </div>
      </div>
    );
  }
}

DrawerChapter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerChapter);