import React from "react";
import { view } from "@risingstack/react-easy-state";
import state from '../store';

import {
  LineChart, Line,AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
} from 'recharts';
const CustomTooltip = ({ payload, label, active }) => {
  if (active) {
    return (
      <div className="tooltip">
        <div className="date">Курс на {label}</div>
        <div className="price-value">Цена: {payload[0].value} &#8381;</div>
      </div>
    );
  }

  return null;
}
class Charts extends React.Component {

  render() {
    
    const data = JSON.parse(JSON.stringify(state.dataCurrencyCurrent));
    return (
     
      <div className='rate-currancy'>
        
    {state.typeChart === 'Line' &&
      <ResponsiveContainer>
      <LineChart
      width={window.innerWidth}
      height={400}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="$.Date" />
      <YAxis />
      <Tooltip content={<CustomTooltip/>}/>
      <Legend />
      <Line type="monotone" dataKey="Value" stroke="#8884d8" activeDot={{ r: 6 }} />
    </LineChart>
    </ResponsiveContainer>
  }
   {state.typeChart === 'Area' &&
     <ResponsiveContainer >
      <AreaChart

      data={data}
      margin={{
        top: 10, right: 30, left: 0, bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="$.Date" />
      <YAxis />
      <Tooltip content={<CustomTooltip/>}/>
      <Area type="monotone" dataKey="Value" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
    </ResponsiveContainer>
  }
  
    </div>
   
    );
}
}
export default view(Charts);
