import { LineChart } from 'react-easy-chart';
import React, { Component } from 'react';

export default class Chart extends Component {
  render() {
    return (
      <LineChart
        lineColors={['blue', 'red']}
        axes
        grid
        verticalGrid
        interpolate={'cardinal'}
        xType={'time'}
        datePattern={'%d-%m %H:%M'}
        width={750}
        height={400}
        style={{
          '.axis path': {
            stroke: '#EDF0F1'
          }
        }}
        data={[
          sell.map(([date, value]) => ({
            x: moment(date).format('DD-MM HH:mm'),
            y: value
          })),
          purchase.map(([date, value]) => ({
            x: moment(date).format('DD-MM HH:mm'),
            y: value
          }))
        ]}
      />
    );
  }
}
