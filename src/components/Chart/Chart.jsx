import { LineChart } from 'react-easy-chart';
import React, { PureComponent, Fragment } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { connect } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import moment from 'moment';
import {
  ChartMain,
  ChartWrapper,
  ChartButtons,
  ButtonActive,
  Button,
  SpinnerWrapper
} from './Style';
import {
  getOffset,
  getData,
  getIsDataLoading,
  selectOffset
} from '../../ducks/currency';
import Spinner from 'react-svg-spinner';

const mapStateToProps = state => ({
  offset: getOffset(state),
  flow: getData(state),
  isLoading: getIsDataLoading(state)
});

const mapDispatchToProps = { selectOffset };

const offsets = {
  '2h': '2ч',
  '4h': '4ч',
  '8h': '8ч',
  '1d': '1д',
  '7d': '7д'
};

class Chart extends PureComponent {
  onSelectOffset = event => {
    const { selectOffset } = this.props;
    const frame = event.target.dataset.id;
    selectOffset(frame);
  };

  renderSpinner = () => {
    return (
      <SpinnerWrapper>
        <Spinner size="64px" color="fuchsia" gap={5} />
      </SpinnerWrapper>
    );
  };

  renderGraph = () => {
    const { flow } = this.props;
    return (
      <Fragment>
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
            flow.map(({ mts, purchase }) => ({
              x: moment(mts).format('DD-MM HH:mm'),
              y: purchase
            })),
            flow.map(({ mts, sell }) => ({
              x: moment(mts).format('DD-MM HH:mm'),
              y: sell
            }))
          ]}
        />
      </Fragment>
    );
  };

  render() {
    const { isLoading, offset } = this.props;
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
          {isLoading ? this.renderSpinner() : this.renderGraph()}
        </ChartWrapper>
      </ChartMain>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);
