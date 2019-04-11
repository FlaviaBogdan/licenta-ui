'use strict';

const request = require('request');

// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = '<Subscription Key>';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';

const imageUrl ="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwic3NWOucXhAhXCzaQKHQ2yBJkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.preciouscore.com%2Fthe-ten-commandments-of-a-happy-man%2F&psig=AOvVaw37cqdJDonYMZCtoMsv_UIx&ust=1554982968187405";

    const params = {
        'returnFaceId': 'true',
        'returnFaceLandmarks': 'false',
        'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
            'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
    };
    
    const options = {
        uri: uriBase,
        qs: params,
        body: '{"url": ' + '"' + imageUrl + '"}',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key' : subscriptionKey
        }
    };
    
    request.post(options, (error, response, body) => {
      if (error) {
        console.log('Error: ', error);
        return;
      }
      let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
      console.log('JSON Response\n');
      console.log(jsonResponse);
    });


    import React, {Component, Fragment} from "react"
import Content from "./BodyContent/Drawer"
import HomePage from "./Layouts/Home"
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import DarkTheme from "../Theme/DarkTheme"
import RegisterForm from './Authentification/RegisterForm'
import DialogRegister from './Dialogs/DialogRegister'
import Webcam from "react-webcam";


export default class extends Component{

    constructor(props) {
        super(props);
        this.state = {
          screenshot: null,
          tab: 0
        };
      }
      
      
    setRef = webcam => {
        this.webcam = webcam;
      };
     
      capture = () => {
        const screenshot  = this.webcam.getScreenshot();
        this.setState({ screenshot });

      };
     
      render() {
        const videoConstraints = {
          width: 1280,
          height: 720,
          facingMode: "user"
        };
      
        return (
          <div>
            <Webcam
              audio={false}
              height={350}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              width={350}
              videoConstraints={videoConstraints}
            />
            <button onClick={this.capture}>Capture photo</button>
            {this.state.screenshot ? <img src={this.state.screenshot} /> : null}
          </div>
        );
      }
}
