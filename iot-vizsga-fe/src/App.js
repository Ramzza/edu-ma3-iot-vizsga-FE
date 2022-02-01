import React from 'react';

import './App.css';
import ActionPanel from './components/ActionPanel';
import ActionHistory from './components/ActionHistory';
import SourceChart from './components/SourceChart';
import TemperatureDataService from './services/temperatureService';
import LuminosityDataService from './services/luminosityService';
import HumidityDataService from './services/humidityService';

const App = () => {
	return (
		<div>
			<ActionPanel />
			<SourceChart
				dataSource={TemperatureDataService}
				label={'Temperature'}
				lineColor={'red'}
				title={'Temperature Chart'}
			/>
			<SourceChart
				dataSource={LuminosityDataService}
				label={'Luminosity'}
				lineColor={'yellow'}
				title={'Luminosity Chart'}
			/>
			<SourceChart
				dataSource={HumidityDataService}
				label={'Humidity'}
				lineColor={'blue'}
				title={'Luminosity Chart'}
			/>
			<ActionHistory />
		</div>
	);
};

export default App;
