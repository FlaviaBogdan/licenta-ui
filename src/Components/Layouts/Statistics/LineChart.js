import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getStatistics } from '../../../utils/UserFunctions';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

class LineChartProgress extends PureComponent {
  constructor(props){
    super(props);
  };
    state = {
        userID : this.props.userId,
        listStatistic: [],
        loading: true,
    };
    async componentWillMount() {
        const listProgress =  await getStatistics(this.state.userID);
        listProgress.sort((a, b) => (a.date < b.date ? -1 : 1));
        let temporarList = [];
        console.log("LIST progress:", listProgress)
        for(let i = 0; i < listProgress.length; i++){
            const tempObject = { name: listProgress[i].chapter, Procentaj: listProgress[i].percentage };
            temporarList.push(tempObject);
        }
        this.setState({listStatistic: temporarList, loading: false });
        console.log("LIST JERE:",   this.state.listStatistic)
    }
  render() {
    return (
        this.state.loading ? null :
      <AreaChart
        width={1350}
        height={450}
        data={this.state.listStatistic}
        margin={{
          top: 50, right: 50, left: 50, bottom: 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Procentaj" stroke="#8e0038" fill="#8e0038" />
      </AreaChart>
    );
  }
}

LineChartProgress.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default LineChartProgress;