import { LineChart } from 'react-easy-chart';
import React, { Component } from 'react';
import {
  ChartMain,
  ChartWrapper,
  ChartButtons,
  ButtonActive,
  Button
} from './Style';

const offsets = {
  '2h': '2ч',
  '4h': '4ч',
  '8h': '8ч',
  '1d': '1д',
  '7d': '7д'
};

export default class Chart extends Component {
  render() {
    const { data, offset } = this.props;
    return (
      <ChartMain>
        <h2>Окно графика</h2>
        <ChartWrapper>
          <ChartButtons>
            {Object.keys(offsets).map(
              item =>
                offset === item ? (
                  <ButtonActive
                    key={item}
                    data-id={item}
                    onClick={this.onSelectOffset}
                  >
                    {offsets[item]}
                  </ButtonActive>
                ) : (
                  <Button
                    key={item}
                    data-id={item}
                    onClick={this.onSelectOffset}
                  >
                    {offsets[item]}
                  </Button>
                )
            )}
          </ChartButtons>
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
        </ChartWrapper>
      </ChartMain>
    );
  }
}
