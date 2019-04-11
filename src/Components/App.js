import React, {Component, Fragment} from "react"
import Content from "./BodyContent/Drawer"
import HomePage from "./Layouts/Home"
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import DarkTheme from "../Theme/DarkTheme"
import RegisterForm from './Authentification/RegisterForm'
import DialogRegister from './Dialogs/DialogRegister'
import Webcam from "react-webcam";


export default class extends Component{
  render(){
      return <fragment>
          <MuiThemeProvider theme={DarkTheme}>
          <Content/>
          </MuiThemeProvider>
      </fragment>
  }
}

