import React, {Component} from "react"
import Webcam from "react-webcam";
import Button from '@material-ui/core/Button';
import {getEmotions} from './utils/UserFunctions'



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
        let a = screenshot.indexOf(",");
        const picture2 = screenshot.substring(a+1);
        console.log(picture2);
        getEmotions(picture2).then(res => {
          console.log(res);
        })
      };
     
      render() {
        const videoConstraints = {
          width: 300,
          height: 300,
          facingMode: "user"
        };
        const {classes} = this.props;
        return (
          <div>
            <Webcam
              audio={false}
              height={0}
              ref={this.setRef}
              minScreenshotWidth={720}
              minScreenshotHeight={720}
              screenshotFormat='image/jpeg'
              width={0}
              videoConstraints={videoConstraints}
            />
           
            <button onClick={this.capture}>Capture photo</button>

            {this.state.screenshot ? <img src={this.state.screenshot} /> : null}
          </div>
        );
      }
}
