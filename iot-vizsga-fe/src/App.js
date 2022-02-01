import React from 'react';

import './App.css';
import ActionPanel from './components/ActionPanel';
import SourceChart from './components/SourceChart';
import TemperatureDataService from './services/temperatureService';
import LuminosityDataService from './services/luminosityService';
import HumidityDataService from './services/humidityService';

const App = () => {
	return (
		<div>
			<ActionPanel />
			<SourceChart dataSource={TemperatureDataService} />
			<SourceChart dataSource={LuminosityDataService} />
			<SourceChart dataSource={HumidityDataService} />
		</div>
	);
};

export default App;
