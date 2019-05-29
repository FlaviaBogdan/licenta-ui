import React, { PureComponent } from 'react';
import { getStatistics } from '../../../utils/UserFunctions';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
    {
      subject: 'asd', A: 69, domain: [0, 150] 
    },
    {
      subject: 'Chinese', A: 100,  domain: [0, 150] 
    },
    {
      subject: 'English', A: 100,  domain: [0, 150] 
    },
    {
      subject: 'English', A: 100,  domain: [0, 150] 
    },
    {
      subject: 'sffds fsfdsf sssssssssss', A: 100,  domain: [0, 150] 
    },
    {
      subject: 'History', A: 100,  domain: [0, 150] 
    },
  ];

class Example extends PureComponent {
    state = {
        listStatistic: [],
        userID : this.props.userId,
        loading: true,
    };
    async componentDidMount() {
      let listProgress =  await getStatistics(this.state.userID);
      listProgress.sort((a, b) => (a.percentage < b.percentage ? -1 : 1));
      var uniqueResults = listProgress.reduce((unique, o) => {
        if(!unique.some(obj => obj.chapter === o.chapter)) {
          unique.push(o);
        }
        return unique;
    },[]);
 
      let temporarList = [];
      for(let i = 0; i < 6; i++){
          const tempObject = { subject: uniqueResults[i].chapter , A: parseInt(uniqueResults[i].percentage)};
          temporarList.push(tempObject);
      }
      this.setState({listStatistic: temporarList, loading: false });
  }

  render() {
    return (
        this.state.loading ? null :
      <RadarChart cx={250} cy={205} outerRadius={116} width={500} height={400} data={this.state.listStatistic}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#fd558f" fill="#fd558f" fillOpacity={0.6} />
      </RadarChart>
    );
  }
}

export default Example;