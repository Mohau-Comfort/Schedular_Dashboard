import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = ({ width, height }) => {
  const { currentMode } = useStateContext();

  // Validate the series type and ensure required props are provided
  const validateSeries = (series) => {
    switch (series.type) {
      case 'StackingColumn':
        if (!series.dataSource || !series.xName || !series.yName) {
          console.error('StackingColumnSeries requires dataSource, xName, and yName props.');
          return false;
        }
        break;
      // Add cases for other series types if needed
      default:
        console.error(`Unsupported series type: ${series.type}`);
        return false;
    }
    return true;
  };

  return (
    <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* Filter out invalid series */}
        {stackedCustomSeries.filter(validateSeries).map((item, index) => (
          // Spread the series object as props to SeriesDirective
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
