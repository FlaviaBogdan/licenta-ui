import React, { Component, Fragment } from "react"
import Content from "./BodyContent/Drawer"
import HomePage from "./Layouts/Home"
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import DarkTheme from "../Theme/DarkTheme"

import DialogRegister from './Authentification/DialogRegister'
import Webcam from "react-webcam";
import FaceDetect from '../FaceDetect'
import Profile from './Profile/Profile';
import LearningMenu from './BodyContent/Menu'

import { withRouter } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export default class extends Component {
  render() {
    return  <MuiThemeProvider theme={DarkTheme}>
        <Router>
          <Content />
        </Router>

      </MuiThemeProvider>
 
  }
}

