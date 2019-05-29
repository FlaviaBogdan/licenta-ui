import React, { PureComponent } from 'react';
import LineChartCustom from './LineChart'
import Paper from '@material-ui/core/Paper';
import FooterBlack from '../FoooterBlack';
import RadaChart from './RadarChart'
import RadaChartLower from './RadarChartLower'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import jwt_decode from 'jwt-decode'; 
import StatisticTable from './StatisticTable';

export default class Example extends PureComponent {
  constructor(props){
    super(props);
  }
  state={
    userID: '',
    loading: true,
  }

  componentDidMount() {
    const token = localStorage.usertoken

    if (token) {
      try {
        const decoded = jwt_decode(token)
  
        this.setState((prevState, props) =>
          ({
            userID: decoded._id,
            loading: false
          }));
      } catch (err) {
        localStorage.removeItem('usertoken');
      }
      console.log("DECODED",this.state.userID) ;
    }
  } 

  render() {
    return (
      this.state.loading ? null :
    <React.Fragment>
      <Grid container>
        <Grid container spacing={24} style={{ margin: '30px' }}>
          <Grid item xs={12} sm={12}>
            <Paper style={{ marginTop: '50px', padding: '5px' }}>
              <Typography variant="h5" gutterbuttom style={{ textAlign: 'center', margin: '10px' }}>
                Care este progresul tau lunar?
            </Typography>
              <LineChartCustom userId = {this.state.userID} style={{ marginTop: '40px' }} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} style={{ height: '900px' }}>
            <StatisticTable  userId = {this.state.userID} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={24} style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Grid item xs={12} sm={12} style={{ alignItems: 'center' }}>
                <Paper style={{ alignItems: 'center', paddingTop: '10px' }}>
                  <Typography variant="h5" gutterbuttom style={{ textAlign: 'center' }}>
                    Care sunt punctele tale forte?
                  </Typography>
                  <center >
                    <RadaChart userId = {this.state.userID}/>
                  </center>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} style={{ alignItems: 'center' }}>
                <Paper style={{ alignItems: 'center', paddingTop: '10px' }}>
                  <Typography variant="h5" gutterbuttom style={{ textAlign: 'center' }}>
                    Care sunt punctele tale slabe?
                 </Typography>
                  <center >
                    <RadaChartLower userId = {this.state.userID} />
                  </center>
                </Paper>
              </Grid>
            </Grid>

          </Grid>
        
        </Grid>
        <Grid item xs={12} sm={12} style={{ alignItems: 'center' }}>
            <FooterBlack />
          </Grid>
      </Grid>

    </React.Fragment>
    );
  }
}
