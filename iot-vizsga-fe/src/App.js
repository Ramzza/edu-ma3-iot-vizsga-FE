import React from 'react';

import './App.css';
import StepperSwitch from './components/StepperSwitch';
import SourceChart from './components/SourceChart';
import TemperatureDataService from './services/temperatureService';
import LuminosityDataService from './services/luminosityService';
import HumidityDataService from './services/humidityService';

const App = () => {
	return (
		<div>
			<StepperSwitch />
			<SourceChart dataSource={TemperatureDataService} />
			<SourceChart dataSource={LuminosityDataService} />
			<SourceChart dataSource={HumidityDataService} />
		</div>
	);
};

export default App;
