import React from 'react';

import './App.css';
import StepperSwitch from './components/StepperSwitch';
import LuminosityChart from './components/LuminosityChart';
import TemperatureChart from './components/TemperatureChart';
import SourceChart from './components/SourceChart';
import TutorialDataService from './services/dataService';

const App = () => {
	return (
		<div>
			<StepperSwitch />
			<LuminosityChart />
			<TemperatureChart />
			<SourceChart dataSource={TutorialDataService} />
		</div>
	);
};

export default App;
